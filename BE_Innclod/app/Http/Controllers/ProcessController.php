<?php

namespace App\Http\Controllers;

use App\Models\Process;
use Illuminate\Http\Request;

class ProcessController extends Controller
{
    public function index()
    {
        $process = Process::all();
        return response()->json($process);
    }

    public function store(Request $request)
    {
        $process = new Process();
        $process->pro_prefix = $request->pro_prefix;
        $process->pro_name = $request->pro_name;
        $process->save();
        return response()->json([
            'status' => 'true',
            'message' => 'El proceso ha sido creado'
        ], 200);
    }

    public function show(Process $process)
    {
        return response()->json($process);
    }

    public function update(Request $request, Process $process)
    {
        $process->pro_prefix = $request->pro_prefix;
        $process->pro_name = $request->pro_name;
        $process->save();
        return response()->json([
            'status' => 'true',
            'message' => 'El proceso ha sido actualizado'
        ], 200);
    }

    public function destroy(Process $process)
    {
        $process->delete();
        return response()->json([
            'status' => 'true',
            'message' => 'El proceso ha sido eliminado'
        ], 200);
    }
}
