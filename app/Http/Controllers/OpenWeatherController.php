<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Interfaces\ApiInterface;

class OpenWeatherController extends Controller implements ApiInterface
{
    //
    private $api_key='d857546d2a1d247742d13cea0851b1eb';
    public function getAPI(Request $request) {

        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, 
        "http://api.openweathermap.org/data/2.5/forecast?lat={$request->input('lat')}&lon={$request->input('lng')}&appid={$this->api_key}");
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        $result = curl_exec($curl);
        curl_close($curl);
        return $result;

    }
}
