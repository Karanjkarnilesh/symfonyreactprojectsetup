<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Entity\Contact;
#[Route('/api/contact', name: 'contact')]
class ContactController extends AbstractController
{
    private $entityManager;
    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager=$entityManager;

    }

    #[Route('/', name: 'app_contact')]
    public function index(): Response
    {
        $contacts =  $this->entityManager->getRepository(Contact::class)->findAll();
        $arrayContact=[];
        foreach($contacts as $contact)
        {
            $arrayContact[]=$contact->toArray();
        }
        return $this->json($arrayContact);
    }

    #[Route('/add', name: 'add_contact')]
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
}
