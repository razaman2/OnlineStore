<?php
    
    use Illuminate\Http\Request;
    use Illuminate\Support\Facades\Route;
    
    /*
    |--------------------------------------------------------------------------
    | API Routes
    |--------------------------------------------------------------------------
    |
    | Here is where you can register API routes for your application. These
    | routes are loaded by the RouteServiceProvider within a group which
    | is assigned the "api" middleware group. Enjoy building your API!
    |
    */
    
    Route::middleware('auth:api')->get('/user', function(Request $request) {
        return $request->user();
    });
    
    Route::get("/products", function() {
        return response()->json(\App\Models\Product::all());
    });
    
    Route::post("/products/create", function(Request $request) {
        $product = (new \App\Models\Product)->create($request->input("product"));
        return response()->json($product);
    });
    
    Route::post("/products/delete", function(Request $request) {
        $product = (new \App\Models\Product)->destroy($request->input("product.id"));
        return response()->json($product);
    });
    
    Route::post("/products/update", function(Request $request) {
        $product = (new \App\Models\Product)->find($request->input("product.id"))->update($request->input("product"));
        return response()->json($product);
    });
    
    Route::post("/products/images", function(Request $request) {
        return $request->file();
    });
