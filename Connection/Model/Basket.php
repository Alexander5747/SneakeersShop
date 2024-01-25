<?php

namespace Model;
require_once __DIR__ . '/../Core/Model.php';
use Core\Model;

class Basket
{
    private $link;

    public function __construct()
    {
        $this->link = new Model();
    }

    public function getProduct()
    {
        $res = mysqli_query($this->link->connect(), 'SELECT * FROM basket');
        for ($data = []; $row = mysqli_fetch_assoc($res); $data[] = $row);
        return $data;
    }
    public function createRecordProfile($id, $name, $price, $image)
    {
        $id = mysqli_real_escape_string($this->link->connect(), $id);
        $name = mysqli_real_escape_string($this->link->connect(), $name);
        $price = mysqli_real_escape_string($this->link->connect(), $price);
        $image = mysqli_real_escape_string($this->link->connect(), $image);
        $query = "INSERT INTO profile (id, name, price, image) VALUES ('$id', '$name', '$price', '$image')";
        return mysqli_query($this->link->connect(), $query);
    }

}