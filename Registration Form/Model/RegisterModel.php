<?php


class RegisterModel extends CI_Model
{

    public function insertUserdata()
    {
        $userData = array(

            'FirstName'=> $this->input->post('firstName',TRUE),//TRUE validate input field
            'LastName'=> $this->input->post('lastName',TRUE),
            'Email'=> $this->input->post('email',TRUE),
            'Password'=> sha1($this->input->post('password',TRUE)),
            'UserType'=> $this->input->post('userType',TRUE),

        );

        $r1 = $this->db->insert('register',$userData);

        return $r1;
    }
}