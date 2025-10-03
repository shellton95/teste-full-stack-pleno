<?php

namespace App\Http\Controllers\Api;

use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;

use App\Interfaces\PostRepository;
use App\Services\PostService;
use App\Http\Requests\PostCreateRequest;


class PostController extends BaseController
{
    public function __construct(
        protected PostRepository $repository,
        protected PostService $service
    ) {}

    public function index(Request $request)
    {
        try {
            $perPage = $request->length ?? 20; 
            
            if (isset($request->start)) {
                $total = $request->start / $perPage;
                $page = ($total + 1) > 0 ? $total + 1 : 1;
            } else {
                $page = 1;
            }
          
            $data = $this->service->index($perPage);

            return response()->json([
                'success' => true,
                'data' => $data->items(),
                'draw' => $request->draw,
                'recordsTotal' => $data->total(),
                'recordsFiltered' => $data->total(),
            ], 200);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Erro: ' . $e->getMessage()
            ], 500);
        }
    }

    public function details(Request $request, $id)
    {
        try{
            $data = $this->service->details($id);

            return response()->json([
                'success' => true,
                'data' => $data
            ], 200);

        }catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Erro: ' . $e->getMessage()
            ], 500);
        }
    }

    public function store(PostCreateRequest $request)
    {
        try{
            $data = $request->all();
            $post = $this->service->store($data);

            return response()->json([
                'success' => true,
                'message' => "Post cadastrado com sucesso"
            ], 201);

        }catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Erro: ' . $e->getMessage()
            ], 500);
        }
    }

    public function update(PostCreateRequest $request, $id)
    {
        try{
            $user = auth()->user()->id;
            if ($request->autor_id !== $user) {
                return response()->json([
                    'success' => false,
                    'message' => 'Você não tem permissão para editar este post'
                ], 403); 
            }
            
            $post = $this->service->update($request, $id);

            return response()->json([
                'success' => true,
                'message' => "Post atualizado com sucesso"
            ], 200);

        }catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Erro: ' . $e->getMessage()
            ], 500);
        }
    }

    public function delete(Request $request, $id)
    {
        try{
            
            $user = auth()->user()->id;
            if ($request->autor_id !== $user) {
                return response()->json([
                    'success' => false,
                    'message' => 'Você não tem permissão para deletar este post'
                ], 403); 
            }
            $this->service->delete($id);

            return response()->json([
                'success' => true,
                'data' => "Post deletado com sucesso"
            ], 200);

        }catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Erro: ' . $e->getMessage()
            ], 500);
        }
    }

}