import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import Link from "next/link";

// Force dynamic rendering to prevent build-time API calls
export const dynamic = 'force-dynamic'

export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' }
  ]
}

const reviews = [
  {
    id: 1,
    name: "Leonardo Da Vinci",
    avatar:
      "https://ui-avatars.com/api/?name=L+V&background=random",
    comment:
      "Loved the course. I've learned some very subtle techniques, especially on leaves.",
  },
  {
    id: 2,
    name: "Titania S",
    avatar:
      "https://ui-avatars.com/api/?name=Titania+S&background=random",
    comment:
      "Loved the course, it had been a while since I had experimented with watercolors and now I will.",
  },
  {
    id: 3,
    name: "Zhirkov",
    avatar:
      "https://ui-avatars.com/api/?name=Z+K&background=random",
    comment:
      "Loved the course. I've learned some very subtle techniques, especially on leaves.",
  },
  {
    id: 4,
    name: "Miphoska",
    avatar:
      "https://ui-avatars.com/api/?name=M+P&background=random",
    comment:
      "Loved the course. I've learned some very subtle techniques, especially on leaves.",
  },
];

interface CourseData {
  id: string;
  title: string;
  instructor: string;
  description: string;
  duration: string;
  chapters: {
    title: string;
    duration: string;
    totalVideos: string;
    lessons: {
      title: string;
      videoUrl?: string; 
    }[];
  }[];
  price: string;
};

export default async function CourseDetailPage({ params }: { params: Promise<{ id: string }> }) {
  // Await params in Next.js 15
  const { id } = await params;
  
  // Hardcoded course data - no external dependencies
  const courseData: CourseData = {
    id: id,
    title: "Mastering C++: From Beginner to Advanced",
    instructor: "Subhajit Srimani",
    description: "This comprehensive C++ course is designed for both beginners and experienced programmers. You'll start with the basics of C++ syntax and gradually move to advanced topics. By the end of this course, you'll be able to build efficient and scalable applications, solve complex problems, and ace technical interviews. Hands-on projects and real-world examples are included to solidify your understanding.",
    duration: "12 weeks (Approx. 6-8 hours per week)",
    chapters: [
      {
        title: "Introduction to C++",
        duration: "2h 30m",
        totalVideos: "4",
        lessons: [
          { title: "Introduction to Programming" },
          { title: "Setting up the Development Environment" },
          { title: "Writing Your First C++ Program" },
          { title: "Understanding Variables and Data Types" }
        ]
      },
      {
        title: "Basic C++ Concepts",
        duration: "3h 15m",
        totalVideos: "5",
        lessons: [
          { title: "Operators and Expressions" },
          { title: "Input and Output Streams" },
          { title: "Control Structures: If-Else" },
          { title: "Loops: For and While" },
          { title: "Functions and Scope" }
        ]
      },
      {
        title: "Object-Oriented Programming",
        duration: "4h 00m",
        totalVideos: "6",
        lessons: [
          { title: "Classes and Objects" },
          { title: "Constructors and Destructors" },
          { title: "Inheritance and Polymorphism" },
          { title: "Encapsulation and Abstraction" },
          { title: "Virtual Functions" },
          { title: "Operator Overloading" }
        ]
      },
      {
        title: "Advanced Data Structures",
        duration: "3h 45m",
        totalVideos: "5",
        lessons: [
          { title: "Arrays and Pointers" },
          { title: "Dynamic Memory Allocation" },
          { title: "Linked Lists" },
          { title: "Stacks and Queues" },
          { title: "Trees and Graphs" }
        ]
      },
      {
        title: "STL and Templates",
        duration: "2h 50m",
        totalVideos: "4",
        lessons: [
          { title: "Introduction to STL" },
          { title: "Vectors and Lists" },
          { title: "Maps and Sets" },
          { title: "Template Programming" }
        ]
      },
      {
        title: "File Handling and Exceptions",
        duration: "2h 20m",
        totalVideos: "3",
        lessons: [
          { title: "File Input/Output Operations" },
          { title: "Exception Handling" },
          { title: "Error Management" }
        ]
      },
      {
        title: "Project Development",
        duration: "3h 00m",
        totalVideos: "4",
        lessons: [
          { title: "Project Planning" },
          { title: "Building a Complete Application" },
          { title: "Code Optimization" },
          { title: "Final Project Presentation" }
        ]
      }
    ],
    price: "1000",
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Video Player */}
            <div className="aspect-video relative bg-black rounded-lg overflow-hidden mb-8">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/MNeX4EGtR5Y"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
                ></iframe>
            </div>

            {/* Course Title */}
            <h1 className="text-2xl font-bold mb-6">{courseData.title}</h1>

            {/* Instructor */}
            <div className="flex items-center gap-4 mb-8">
              <Image
                src="https://ui-avatars.com/api/?name=S+S&background=random"
                alt="Subhajit Srimani"
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <div className="font-medium">{courseData.instructor}</div>
                <div className="text-sm text-muted-foreground">
                  DSA Expert
                </div>
              </div>
            </div>

            {/* About Course */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">About Course</h2>
              <p className="text-muted-foreground">
                {courseData.description || "Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries."}
              </p>
            </div>

            {/* Reviews */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Reviews</h2>
              <div className="space-y-6">
                {reviews.map((review) => (
                  <div key={review.id} className="flex gap-4">
                    <Image
                      src={review.avatar}
                      alt={review.name}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <div>
                      <div className="font-medium">{review.name}</div>
                      <p className="text-muted-foreground">{review.comment}</p>
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-52 mx-auto flex items-center">
                  Load more reviews
                </Button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-4 space-y-6">
              <div className="bg-card rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-2xl font-bold">INR {courseData.price}</div>
                    <div className="text-sm text-muted-foreground line-through">
                      INR {parseInt(courseData.price) + 1000}
                    </div>
                  </div>
                  <div className="bg-yellow-100 text-amber-500 text-sm font-medium px-2.5 py-0.5 rounded">
                    50% OFF
                  </div>
                </div>

                <div className="space-y-4">         
                  <Link href="https://buy.stripe.com/test_6oE289fUcgBe5r2fYY" passHref>
                    <Button className="w-full bg-gradient-to-r from-indigo-500 to-indigo-700 hover:shadow-md" size="lg">
                      Buy
                    </Button>
                  </Link>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 flex items-center justify-center">
                      📚
                    </div>
                    <div>{courseData.chapters?.length || 0} Sections</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 flex items-center justify-center">
                      📝
                    </div>
                    <div>{courseData.chapters?.reduce((total, chapter) => total + chapter.lessons.length, 0) || 0} Lectures</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 flex items-center justify-center">
                      ⏱️
                    </div>
                    <div>{courseData.duration || "21h 33m total length"}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 flex items-center justify-center">
                      🌐
                    </div>
                    <div>English</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
