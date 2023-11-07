<?php

namespace App\Http\Controllers;

use App\Models\ProcessDocument;
use App\Models\Document;
use App\Models\Process;
use DB;
use Illuminate\Http\Request;

class ProcessDocumentController extends Controller
{
    public function index()
    {
        $document = ProcessDocument::select('process_documents.*', 'documents.*', 'processes.*')
        ->join('documents', 'process_documents.id_document', '=', 'documents.id')
        ->join('processes', 'process_documents.id_process', '=', 'processes.id')
        ->paginate(10);
        return response()->json($document);
    }

    public function store(Request $request)
    {
        $processDocument = new ProcessDocument();
        $processDocument->doc_name = $request->doc_name;
        $processDocument->doc_code = $request->doc_code;
        $processDocument->doc_content = $request->doc_content;
        $processDocument->id_process = $request->id_process;
        $processDocument->id_document = $request->id_document;
        $processDocument->save();
        return response()->json([
            'status' => 'true',
            'message' => 'El tipo de proceso del documento ha sido creado'
        ], 200);
    }

    public function show(ProcessDocument $processDocument)
    {
        return response()->json($processDocument);
    }

    public function update(Request $request, ProcessDocument $processDocument)
    {
        $processDocument->doc_name = $request->doc_name;
        $processDocument->doc_codigo = $request->doc_codigo;
        $processDocument->doc_contenido = $request->doc_contenido;
        $processDocument->id_process = $request->id_process;
        $processDocument->id_document = $request->id_document;
        $processDocument->save();
        return response()->json([
            'status' => 'true',
            'message' => 'El tipo de proceso del documento ha sido actualizado'
        ], 200);
    }

    public function destroy(ProcessDocument $processDocument)
    {
        $processDocument->delete();
        return response()->json([
            'status' => 'true',
            'message' => 'El tipo de proceso del documento ha sido eliminado'
        ], 200);
    }
}
