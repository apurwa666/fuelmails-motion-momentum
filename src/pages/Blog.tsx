
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowUp, Calendar, Clock, Mail } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "10 Email Marketing Trends for 2024",
      excerpt: "Discover the latest trends that will shape email marketing this year and boost your campaign performance. From AI-powered personalization to interactive content, these trends will help you stay ahead of the competition.",
      content: "Email marketing continues to evolve at a rapid pace. In 2024, we're seeing significant shifts toward AI-powered personalization, interactive email content, and advanced segmentation strategies. This comprehensive guide covers the top 10 trends every marketer should know about...",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=400&fit=crop",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Trends"
    },
    {
      id: 2,
      title: "Building Customer Loyalty Through Email",
      excerpt: "Learn how to create email campaigns that turn one-time buyers into lifelong customers. Discover proven strategies for retention and engagement.",
      content: "Customer loyalty is the cornerstone of sustainable business growth. Through strategic email marketing, you can nurture relationships that last. This guide explores advanced techniques for building lasting customer relationships through personalized email experiences...",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=400&fit=crop",
      date: "March 10, 2024",
      readTime: "6 min read",
      category: "Strategy"
    },
    {
      id: 3,
      title: "A/B Testing Your Email Campaigns",
      excerpt: "Master the art of A/B testing to optimize your email open rates and conversions. Learn what to test and how to analyze results.",
      content: "A/B testing is crucial for email marketing success. By systematically testing different elements of your campaigns, you can dramatically improve performance. This detailed guide covers everything from subject line testing to call-to-action optimization...",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&h=400&fit=crop",
      date: "March 5, 2024",
      readTime: "10 min read",
      category: "Optimization"
    },
    {
      id: 4,
      title: "Email Automation Best Practices",
      excerpt: "Set up automated email sequences that nurture leads and drive conversions without constant manual intervention.",
      content: "Email automation is a game-changer for modern marketers. By setting up intelligent sequences, you can deliver the right message at the right time to every subscriber. This comprehensive guide covers welcome series, abandoned cart emails, and advanced nurture sequences...",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop",
      date: "February 28, 2024",
      readTime: "12 min read",
      category: "Automation"
    },
    {
      id: 5,
      title: "Mobile-First Email Design",
      excerpt: "Create emails that look stunning on mobile devices. Learn responsive design principles and mobile optimization techniques.",
      content: "With over 60% of emails opened on mobile devices, mobile-first design is no longer optional. This guide provides actionable strategies for creating emails that deliver exceptional experiences across all devices...",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
      date: "February 20, 2024",
      readTime: "7 min read",
      category: "Design"
    },
    {
      id: 6,
      title: "Email Deliverability Guide",
      excerpt: "Ensure your emails reach the inbox with our comprehensive deliverability guide. Avoid spam filters and improve sender reputation.",
      content: "Email deliverability is the foundation of successful email marketing. Without good deliverability, even the best campaigns won't reach their intended audience. This guide covers everything from authentication protocols to list hygiene practices...",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=400&fit=crop",
      date: "February 15, 2024",
      readTime: "9 min read",
      category: "Technical"
    }
  ];

  const categories = ["All", "Trends", "Strategy", "Optimization", "Automation", "Design", "Technical"];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Mail className="h-8 w-8 text-purple-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Fuelmails
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="/" className="text-gray-600 hover:text-purple-600 transition-colors">
                ← Back to Home
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-6">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Email Marketing Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Insights, strategies, and best practices to fuel your email marketing success
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={category === "All" ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-purple-100 text-purple-600 text-sm font-medium rounded-full">
                Featured
              </span>
            </div>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={blogPosts[0].image} 
                    alt={blogPosts[0].title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {blogPosts[0].date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {blogPosts[0].readTime}
                    </span>
                    <span className="px-2 py-1 bg-gray-100 rounded text-xs">
                      {blogPosts[0].category}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-800 hover:text-purple-600 transition-colors cursor-pointer">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:opacity-90">
                    Read Full Article →
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden cursor-pointer">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-2 py-1 bg-white/90 backdrop-blur text-xs font-medium rounded">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-purple-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Button variant="ghost" className="text-purple-600 hover:text-purple-700 p-0">
                    Read More →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center text-white space-y-6">
            <h2 className="text-3xl font-bold">Stay Updated</h2>
            <p className="text-lg opacity-90">
              Get the latest email marketing insights delivered to your inbox weekly
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Mail className="h-6 w-6 text-purple-400" />
              <span className="text-xl font-bold">Fuelmails</span>
            </div>
            <div className="text-gray-400">
              <p>&copy; 2024 Fuelmails. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
