<?php include 'Templates/Header1.php' ?>

<link rel="stylesheet" href="<?php echo base_url();?>/css/css/register.css">

<br><br><br>
<?php /*echo validation_errors(); */?>
<?php echo form_open('Register/RegisterUser'); ?>

<div class="container col-md-offset-2 col-md-8 form-horizontal">

        <h2 align="center">Registration Form</h2><br>

    <div >
        <?php if ($this->session->flashdata('msg')){
            echo "<h3 style='color: #17B978' align='center'>".$this->session->flashdata('msg')."</h3>";} ?>
        <?php echo "<h5 align='center' style='color: red'>".validation_errors()."</h5>"; ?>
    </div>


    <div class="form-group">
            <label for="firstName" class="col-sm-3 control-label">First Name</label>
            <div class="col-sm-9">
                <input type="text" id="firstName" placeholder="First Name" class="form-control" autofocus name="firstName">
            </div>
        </div>
        <div class="form-group">
            <label for="lastName" class="col-sm-3 control-label">Last Name</label>
            <div class="col-sm-9">
                <input type="text" id="lastName" placeholder="Last Name" class="form-control" autofocus name="lastName">
            </div>
        </div>
        <div class="form-group">
            <label for="email" class="col-sm-3 control-label">Email</label>
            <div class="col-sm-9">
                <input type="email" id="email" placeholder="Email" class="form-control" name="email">
            </div>
        </div>
        <div class="form-group">
            <label for="password" class="col-sm-3 control-label">Password</label>
            <div class="col-sm-9">
                <input type="password" id="password" placeholder="Password" class="form-control" name="password">
            </div>
        </div>
        <div class="form-group">
            <label for="confirmPassword" class="col-sm-3 control-label">Confirm Password</label>
            <div class="col-sm-9">
                <input type="password" id="confirmPassword" placeholder="Confirm Password" class="form-control" name="confirmPassword">
            </div>
        </div>

    <div class="form-group">
        <label for="lastName" class="col-sm-3 control-label">User Type</label>
        <div class="col-sm-9">
            <input type="text"  class="form-control" name="userType" value="Customer" readonly>
        </div>
    </div>

        <div class="form-group">
            <div class="col-sm-9 col-sm-offset-3">
                <button type="submit" class="btn btn-primary btn-block">Register</button>
            </div>
        </div>

</div>
<?php echo  form_close(); ?>
<!--<div class="form-group">
            <label for="birthDate" class="col-sm-3 control-label">Date of Birth</label>
            <div class="col-sm-9">
                <input type="date" id="birthDate" class="form-control">
            </div>
        </div>-->