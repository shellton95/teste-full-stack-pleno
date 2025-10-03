<?php

namespace App\Http\Controllers\Api;

use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use App\Http\Requests\UserCreateRequest;
use App\Services\AuthService;
// use App\Interfaces\UserRepository;
// use Illuminate\Support\Facades\Hash;
// use Illuminate\Support\Str;


class AuthController extends BaseController
{
    public function __construct(
       protected AuthService $service,
        // protected UserRepository $repository
    ) {}

    public function login(Request $request)
    {
        try {
            $data = $this->service->login($request);

            return response()->json([
                'success' => true,
                'data' => $data
            ], 200);

        } catch (HttpException $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage()
            ], $e->getStatusCode());
            
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Erro: ' . $e->getMessage()
            ], 500);
        }
    }

    public function register(UserCreateRequest $request)
    {
        // try {
        //     $this->service->register($request);

        //     return response()->json([
        //         'success' => true,
        //         'message' => 'Usuário criado com sucesso!'
        //     ], 201);

        // } catch (\Exception $e) {
        //     return response()->json([
        //         'success' => false,
        //         'message' => 'Erro ao criar usuário: ' . $e->getMessage(),
        //         'errors' => []
        //     ], 500);
        // }

        try {
            $data = $this->service->register($request);

            return response()->json([
                'success' => true,
                'message' => 'Usuário criado com sucesso!',
                'data' => $data
            ], 201);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Erro ao criar usuário: ' . $e->getMessage()
            ], 500);
        }
    }
}