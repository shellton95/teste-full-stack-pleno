<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

/**
 * Class Post.
 *
 * @package namespace App\Models;
 */
class Post extends Model //implements Transformable
{
    //use TransformableTrait;
    public $table = 'posts';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'titulo',
        'conteudo',
        'autor_id',
    ];

    public function autor()
    {
        return $this->belongsTo(User::class, 'autor_id');
    }

}
