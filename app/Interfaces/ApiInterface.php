<?php


namespace App\Interfaces;
use Illuminate\Http\Request;

interface ApiInterface {
    
    public function getAPI(Request $request);
}