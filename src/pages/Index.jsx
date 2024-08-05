import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Paw, Heart, Brain } from "lucide-react";
import { navItems } from "../nav-items";

const Index = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Paw className="h-8 w-8 text-blue-500" />
                <span className="ml-2 text-xl font-bold text-gray-800">DoggyWorld</span>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                {navItems.map((item) => (
                  <a
                    key={item.to}
                    href={item.to}
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    {item.icon}
                    <span className="ml-2">{item.title}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Welcome to DoggyWorld</h1>
          
          <div className="mb-8">
            <img 
              src="https://images.unsplash.com/photo-1517849845537-4d257902454a" 
              alt="Cute dog" 
              className="mx-auto object-cover w-full h-[400px] rounded-lg shadow-lg"
            />
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="about">About Dogs</TabsTrigger>
              <TabsTrigger value="characteristics">Characteristics</TabsTrigger>
              <TabsTrigger value="breeds">Popular Breeds</TabsTrigger>
            </TabsList>
            <TabsContent value="about">
              <Card>
                <CardHeader>
                  <CardTitle>What are Dogs?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Dogs are domesticated mammals, not natural wild animals. They were originally bred from wolves. They have been bred by humans for a long time, and were the first animals ever to be domesticated.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="characteristics">
              <Card>
                <CardHeader>
                  <CardTitle>Characteristics of Dogs</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-2 gap-4">
                    <li className="flex items-center"><Heart className="mr-2 text-red-500" /> Loyal and affectionate</li>
                    <li className="flex items-center"><Brain className="mr-2 text-purple-500" /> Highly trainable</li>
                    <li className="flex items-center"><Paw className="mr-2 text-brown-500" /> Various sizes and breeds</li>
                    <li className="flex items-center"><Paw className="mr-2 text-brown-500" /> Excellent sense of smell</li>
                    <li className="flex items-center"><Heart className="mr-2 text-red-500" /> Understand human emotions</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="breeds">
              <Card>
                <CardHeader>
                  <CardTitle>Popular Dog Breeds</CardTitle>
                  <CardDescription>Here are some of the most popular dog breeds worldwide:</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <li className="flex items-center"><Paw className="mr-2 text-yellow-500" /> Labrador Retriever</li>
                    <li className="flex items-center"><Paw className="mr-2 text-gray-500" /> German Shepherd</li>
                    <li className="flex items-center"><Paw className="mr-2 text-yellow-600" /> Golden Retriever</li>
                    <li className="flex items-center"><Paw className="mr-2 text-black" /> French Bulldog</li>
                    <li className="flex items-center"><Paw className="mr-2 text-brown-500" /> Beagle</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="mt-8 text-center">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white">Learn More About Dogs</Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
