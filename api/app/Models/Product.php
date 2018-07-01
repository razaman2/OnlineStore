<?php
    
    namespace App\Models;
    
    use Illuminate\Database\Eloquent\Model;

    class Product extends Model
    {
        protected $guarded = ["id"];
        
        public function getStatusAttribute($value) {
            return ucwords($value);
        }
    
        public function images() {
            return $this->hasMany(ProductImage::class);
        }
    }
