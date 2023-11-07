<?php

namespace App\Http\Controllers;

use App\Models\Document;
use Illuminate\Http\Request;

class DocumentController extends Controller
{
    public function index()
    {
        $document = Document::all();
        return response()->json($document);
    }

    public function store(Request $request)
    {
        $document = new Document();
        $document->doc_name = $request->doc_name;
        $document->doc_prefix = $request->doc_prefix;
        $document->save();
        return response()->json([
            'status' => 'true',
            'message' => 'El tipo documento ha sido creado'
        ], 200);
    }

    public function show(Document $document)
    {
        return response()->json($document);
    }

    public function update(Request $request, Document $document)
    {
        $document->doc_name = $request->doc_name;
        $document->doc_prefix = $request->doc_prefix;
        $document->save();
        return response()->json([
            'status' => 'true',
            'message' => 'El tipo documento ha sido actualizado'
        ], 200);
    }

    public function destroy(Document $document)
    {
        $document->delete();
        return response()->json([
            'status' => 'true',
            'message' => 'El tipo documento ha sido eliminado'
        ], 200);
    }
}
