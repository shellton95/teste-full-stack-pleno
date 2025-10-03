<?php

namespace App\Services;

use Illuminate\Http\Request;
use App\Interfaces\PostRepository;



class PostService{

    public function __construct(
        protected PostRepository $repository
    )
    {
    }

    public function index($request)
    {
        return $this->repository->with('autor')->paginate($request);
    }

    public function details($id)
    {
        return $this->repository->with('autor')->find($id);
    }

    public function store($data)
    {
        return $this->repository->create($data);
    }

    public function update($request, $id)
    {
        $post = $this->repository->find($id);

        $data = $request->all();
        return $this->repository->update($data, $id);
    }

    public function delete($id)
    {
        return $this->repository->delete($id);
    }
}