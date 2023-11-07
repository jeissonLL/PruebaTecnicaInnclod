<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('process_documents', function (Blueprint $table) {
            $table->id();
            $table->string('doc_name', 50);
            $table->integer('doc_code');
            $table->string('doc_content', 4000);
            $table->unsignedBigInteger('id_process');
            $table->foreign('id_process')->references('id')->on('processes')->constrained()->onUpdate('cascade')->onDelete('cascade');
            $table->unsignedBigInteger('id_document');
            $table->foreign('id_document')->references('id')->on('documents')->constrained()->onUpdate('cascade')->onDelete('cascade');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('process_documents');
    }
};
