<?php
    
    namespace Tests\Unit;

    use Illuminate\Support\Facades\Storage;
    use Tests\TestCase;

    class ExampleTest extends TestCase
    {
        public function testBasicTest() {
            //return collect($request->file("product-image"))->map(function(\Symfony\Component\HttpFoundation\File\UploadedFile $image) {
            //    return Storage::disk("products")->;
            //    //return url($image->storePubliclyAs("product-images", "product".time().".{$image->getClientOriginalExtension()}"));
            //});
            dump(Storage::disk("products")->put("0pSYmm9iHcK1o633W7S5Md14bqmVRgX5XMS1PRYQ.jpeg"));
            //dump(Storage::disk("products")->url("0pSYmm9iHcK1o633W7S5Md14bqmVRgX5XMS1PRYQ.jpeg"));
            $this->assertTrue(true);
        }
    }
