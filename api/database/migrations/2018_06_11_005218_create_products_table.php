<?php
    
    use Illuminate\Database\Migrations\Migration;
    use Illuminate\Database\Schema\Blueprint;
    use Illuminate\Support\Facades\Schema;
    
    class CreateProductsTable extends Migration
    {
        public function up() {
            Schema::create('products', function(Blueprint $table) {
                $table->increments('id');
                $table->string("name");
                $table->float("price");
                $table->enum("status", [
                    "available",
                    "sold-out",
                    "back-ordered",
                    "discontinued"
                ]);
                $table->string("image");
                $table->text("description");
                $table->timestamps();
            });
        }
        
        public function down() {
            Schema::dropIfExists('products');
        }
    }
