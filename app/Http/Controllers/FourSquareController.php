<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Interfaces\ApiInterface;

class FourSquareController extends Controller implements ApiInterface
{
    //
    private $client_id     = 'MXFCVGCIVQLSWRI5VWIPPQQEOOT5GDD41FPA1IJQ4ZJF5KJN';
    private $client_secret = 'I30I4RS5SUSTQOS1QLE4TGCUOE21WQCQGTL2NSXOH2NYG1IX';

    
    public function getAPI(Request $request) {

        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, 
        "https://api.foursquare.com/v2/venues/explore?near={$request->input('location')}&client_id={$this->client_id}&client_secret={$this->client_secret}&v=20210401&locale=en");
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        $result = curl_exec($curl);
        curl_close($curl);
        return $result;

    }
}
