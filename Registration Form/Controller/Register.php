<?php

class Register extends CI_Controller
{


    public function RegisterUser()
    {

        //Validations of input fields
        $this->form_validation->set_rules('firstName', 'First Name', 'required');
        $this->form_validation->set_rules('lastName', 'Last Name', 'required');
        $this->form_validation->set_rules('email', 'Email', 'required|valid_email|is_unique[register.email]');
        $this->form_validation->set_rules('password', 'Password', 'trim|required|min_length[6]');
        $this->form_validation->set_rules('confirmPassword', 'Confirm Password', 'required|matches[password]');

        if ($this->form_validation->run() == FALSE)
        {
            $this->load->view('Register');
        }
        else
        {
            $this->load->model('RegisterModel');
            $response = $this->RegisterModel->insertUserdata();

            if ($response){
                $this->session->set_flashdata('msg','Registered Successfully');
                redirect('Welcome/Register');

            }else{
                $this->session->set_flashdata('msg','Something went wrong');
                redirect('Welcome/Register');

            }

        }

    }




}