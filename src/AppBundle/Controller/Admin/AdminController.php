<?php

namespace AppBundle\Controller\Admin;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class AdminController extends Controller
{
    /**
     * @Route("/admin", name="dashboard")
     */
    public function indexAction()
    {
        // replace this example code with whatever you need
        return $this->render('admin/dashboard.html.twig');
    }
}
