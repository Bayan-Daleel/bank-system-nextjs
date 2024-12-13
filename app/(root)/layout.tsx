import MobileNavbar from "@/components/ui/MobileNavbar";
import SideBar from "@/components/ui/SideBar";
import  Image from 'next/image';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn={firstName: 'Bayan',lastName:'JSM'}
  return (
  <main className="flex h-screen w-full font-inter">
   <SideBar user={loggedIn}/>
   <div className="flex size-full flex-col">
    <div className="root-layout">
      <Image src="/icons/logo.svg" width={30} height={30} alt="menue item" />
    <div>
    <MobileNavbar user={loggedIn}/>
    </div>
    </div>
    {children}
   </div>
  </main>
  );
}
