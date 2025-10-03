<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class PostCreateRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'titulo' => 'required',
            'conteudo' => 'required',
            'autor_id' => 'required',
        ];
    }

    public function messages(): array
    {
        return [
            'título.required' => 'Titulo é obrigatório',
            'conteudo.required' => 'Conteudo é obrigatório',
            'autor_id.required' => 'Autor é obrigatório',
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json([
            'success' => false,
            'message' => 'Erro de validação',
            'errors' => $validator->errors()
        ], 422));
    }
}
