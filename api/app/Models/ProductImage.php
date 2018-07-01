<?php
    
    namespace App\Models;
    
    use Illuminate\Database\Eloquent\Model;
    
    class ProductImage extends Model
    {
        protected $guarded = ["id"];
        
        public function getPathAttribute($path) {
            return url($path);
        }
        
        public function product() {
            return $this->belongsTo(Product::class);
        }
    }
