<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Entity\User;

  #[Route('/api/user', name: 'user')]
class UserController extends AbstractController
{

    private $entityManager;
    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager=$entityManager;

    }

    #[Route('/', name: 'app_user')]
    public function index(): Response
    {
        $users =  $this->entityManager->getRepository(User::class)->findAll();
        $arrayUsers=[];
        foreach($users as $user)
        {
            $arrayUsers[]=$user->toArray();
        }

        return $this->json($arrayUsers);
    }

    #[Route('/add', name: 'app_users')]
    public function add()
    {
        $name="pratik";
        $email="pratik@gmail.com";
        $age="25";
        $password="123457";
        $phone="1242342342";
        $role=['sdfdfgfhgf'];
         $user=new User();
         $user->setName($name);
         $user->setEmail($email);
         $user->setAge($age);
         $user->setPhone($phone);
         $user->setPassword($password);
          // tell Doctrine you want to (eventually) save the Product (no queries yet)
          $this->entityManager->persist($user);

        // actually executes the queries (i.e. the INSERT query)
        $this->entityManager->flush();
        return new Response('User Added Successfully');
       
    }


    #[Route('/update/{id}', name: 'update_user')]
    public function update(int $id ): Response
    {    
        $user =$this->entityManager->getRepository(User::class)->find($id)->toArray();
        return $this->json($user);
    }


    
}
