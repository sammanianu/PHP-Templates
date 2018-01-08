<html>

<head>
    <title>Shopping Cart</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>

</head>

<body>

<div class="container">
<br><br>

    <div class="col-lg-6 col-md-6">
        <div class="table-responsive">
            <h1 align="center">SHOPPING CART</h1><br>

            <?php
            foreach ($product as $row){

                echo '
                
                <div class="col-md-4" style="padding: 16px;
                background-color: #f1f1f1; border: 1px solid #ccc;
                margin-bottom: 16px; height: 400px" align="center">
                
                <img src="'.base_url().'images/'.$row->product_image.'" class="img-thumbnail"/><br>
                <h4>'.$row->product_name.'</h4>
                <h3 class="wy-text-danger">'.$row->product_price.'</h3>
                
                <input type="text" name="quantity" class="quantity" id="'.$row->product_id.'"/>

                <button type="button" name="add_cart" class="btn btn-success add_cart" data-productname="'.$row->product_name.'"
                        data-price="'.$row->product_price.'" data-productid="'.$row->product_id.'">Add to Cart</button>
            </div>
                ';
            }

            ?>

        </div>
    </div>

    <div class="col-lg-6 col-md-6">
        <div id="cart_details">
            <h3 align="center">Cart Empty</h3>
        </div>
    </div>



</div>
</body>
</html>

<script>

    $(document).ready(function () {

        $('.add_cart').click(function () {
            var product_id = $(this).data("productid");
            var product_name = $(this).data("productname");
            var product_price = $(this).data("price");
            var quantity = $('#'+product_id).val();

            if (quantity !='' && quantity>0){

                $.ajax({
                    url:"<?php echo base_url();?>index.php/ShoppingCart/add",
                    method:"POST",
                    data:{product_id:product_id,product_name:product_name,product_price:product_price,quantity:quantity},
                    success:function (data) {
                        alert("Product added into cart");
                        $('#cart_details').html(data);
                        $('#'+product_id).val('');
                    }
                });
            }
            else {
                alert("Please enter quantity");
            }
        });
        $('#cart_details').load("<?php echo base_url();?>index.php/ShoppingCart/load");

        $(document).on('click','.remove_inventory',function () {

            var row_id = $(this).attr("id");
            if (confirm("Are you sure you want remove this?")){
                $.ajax({
                    url:"<?php echo base_url();?>index.php/ShoppingCart/remove",
                    method:"POST",
                    data:{row_id:row_id},
                    success:function (data) {
                        alert("Product remove from cart");
                        $('#cart_details').html(data);
                    }
                })
            }
            else {
                return false;
            }
        });

        $(document).on('click','#clear_cart',function () {

            if (confirm("Are you sure you want remove cart?")){
                $.ajax({
                    url:"<?php echo base_url();?>index.php/ShoppingCart/clear",
                    success:function (data) {
                        alert("Your cart has been clear");
                        $('#cart_details').html(data);
                    }
                })
            }
            else {
                return false;
            }
        });
    });
</script>