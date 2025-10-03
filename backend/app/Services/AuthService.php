<?php

namespace App\Services;

use Illuminate\Http\Request;
use App\Interfaces\UserRepository;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Tymon\JWTAuth\Facades\JWTAuth;


class AuthService{

    public function __construct(
        protected UserRepository $repository
    )
    {
    }

    public function login($request)
    {
        // $data = $this->repository->scopeQuery(function ($query) use ($request) {
        //     return $query->where('email', $request->login);
        // })->first();

        // if (!$data) {
        //     throw new HttpException(404, "Usuário não encontrado");
        // }

        // if (!Hash::check($request->senha, $data->senha)) {
        //     throw new HttpException(401, "Senha inválida");
        // }

        // return $data;

        $user = $this->repository->scopeQuery(function ($query) use ($request) {
            return $query->where('email', $request->login);
        })->first();

        if (!$user) {
            throw new HttpException(404, "Usuário não encontrado");
        }

        if (!Hash::check($request->senha, $user->senha)) {
            throw new HttpException(401, "Senha inválida");
        }

        // Gerar o token JWT
        $token = JWTAuth::fromUser($user);

        return [
            'user' => $user,
            'token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth('api')->factory()->getTTL() * 60 // em segundos
        ];
    }

    public function register($request)
    {
        // $data = $request->all();
        // $data['senha'] = Hash::make($data['senha']);
        // $data['remember_token'] = Str::random(60);
        // $user = $this->repository->create($data);

        // return $user;

        $data = $request->all();
        $data['senha'] = Hash::make($data['senha']);
        $data['remember_token'] = Str::random(60);
        $user = $this->repository->create($data);

        // Gerar token para o novo usuário
        $token = JWTAuth::fromUser($user);

        return [
            'user' => $user,
            'token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth('api')->factory()->getTTL() * 60
        ];
    }
}