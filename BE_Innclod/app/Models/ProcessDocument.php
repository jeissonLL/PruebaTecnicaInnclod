<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProcessDocument extends Model
{
    use HasFactory;

    protected $fillble = [
        'doc_name',
        'doc_code',
        'doc_content',
        'id_process',
        'id_document'
    ];

}
