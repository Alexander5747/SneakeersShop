<?php

namespace Core;

class Model
{
    private $host = 'localhost';
    private $user = 'root';
    private $pass = ''; // Используйте уникальный пароль
    private $name = 'sneakeersShop';

    public function connect()
    {
        return mysqli_connect($this->host, $this->user, $this->pass, $this->name);
    }
}