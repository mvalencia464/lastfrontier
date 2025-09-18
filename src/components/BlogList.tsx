import React from 'react';
import { ArrowLeft, Calendar, User, Clock, ArrowRight } from 'lucide-react';

interface BlogListProps {
  onBack: () => void;
  onSelectPost: (postId: string) => void;
}

const BlogList: React.FC<BlogListProps> = ({ onBack, onSelectPost }) => {
  const blogPosts = [
    {
      id: 'winter-prep',
      title: 'How to Prepare Your Anchorage Lawn for Winter: A Local\'s Guide',
      excerpt: 'A little work now can prevent a lot of headaches (and expense) come spring cleanup. Here\'s your complete winterization checklist.',
      date: 'October 15, 2024',
      readTime: '5 min read',
      category: 'Winter Care',
      featured: true
    },
    {
      id: 'snow-mold',
      title: 'What is Snow Mold and How to Prevent It on Your Anchorage Lawn',
      excerpt: 'That ugly brown patch under the melting snow isn\'t just dead grass—it\'s snow mold. Here\'s how to prevent this common Alaska lawn disease.',
      date: 'October 12, 2024',
      readTime: '4 min read',
      category: 'Lawn Health'
    },
    {
      id: 'diy-vs-professional',
      title: 'DIY vs. Professional Snow Plowing in Palmer: Which is Right for Your Driveway?',
      excerpt: 'Thinking about tackling snow removal yourself? Here\'s an honest comparison to help you decide what\'s best for your situation.',
      date: 'October 8, 2024',
      readTime: '6 min read',
      category: 'Snow Removal'
    },
    {
      id: 'lawn-pests',
      title: 'Common Anchorage Lawn Pests and How to Get Rid of Them',
      excerpt: 'From leatherjackets to chafer beetles, Alaska lawns face unique pest challenges. Learn to identify and eliminate these common invaders.',
      date: 'September 28, 2024',
      readTime: '7 min read',
      category: 'Pest Control'
    },
    {
      id: 'spring-checklist',
      title: 'Your Spring Cleanup Checklist for a Beautiful Palmer Lawn',
      excerpt: 'Spring is here! Use this comprehensive checklist to bring your lawn back to life after the long Alaska winter.',
      date: 'April 15, 2024',
      readTime: '5 min read',
      category: 'Spring Care'
    },
    {
      id: 'after-winter',
      title: '5 Things Your Anchorage Lawn Needs After the Long Winter',
      excerpt: 'Winter was rough on your lawn. Here are the five essential steps to nurse it back to health and get it thriving again.',
      date: 'April 8, 2024',
      readTime: '4 min read',
      category: 'Lawn Recovery'
    },
    {
      id: 'mowing-guide',
      title: 'How Often Should I Mow My Lawn in Anchorage? A Seasonal Guide',
      excerpt: 'Get the timing right with this month-by-month mowing schedule designed specifically for Anchorage\'s unique growing season.',
      date: 'May 20, 2024',
      readTime: '6 min read',
      category: 'Lawn Care Basics'
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'Winter Care': 'bg-blue-100 text-blue-800',
      'Lawn Health': 'bg-green-100 text-green-800',
      'Snow Removal': 'bg-gray-100 text-gray-800',
      'Pest Control': 'bg-red-100 text-red-800',
      'Spring Care': 'bg-emerald-100 text-emerald-800',
      'Lawn Recovery': 'bg-yellow-100 text-yellow-800',
      'Lawn Care Basics': 'bg-purple-100 text-purple-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const scrollToContact = () => {
    onBack();
    setTimeout(() => {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={onBack}
            className="flex items-center text-brand-light hover:text-brand-dark transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </button>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Lawn Care Tips & Insights
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl">
            Expert advice for maintaining beautiful lawns and properties in Alaska's unique climate. 
            From winter prep to spring recovery, we've got you covered.
          </p>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Featured Post */}
        {blogPosts.filter(post => post.featured).map(post => (
          <div key={post.id} className="mb-16">
            <div className="bg-gradient-to-r from-brand-light to-brand-dark rounded-2xl p-8 text-white mb-8">
              <span className="inline-block bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                Featured Article
              </span>
              <h2 className="text-3xl font-bold mb-4">{post.title}</h2>
              <p className="text-blue-100 mb-6 text-lg leading-relaxed">{post.excerpt}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6 text-blue-100">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <button
                  onClick={() => onSelectPost(post.id)}
                  className="bg-white text-brand-dark px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center"
                >
                  Read Article
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Regular Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.filter(post => !post.featured).map(post => (
            <article
              key={post.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer"
              onClick={() => onSelectPost(post.id)}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                    {post.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight hover:text-brand-dark transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <ArrowRight className="w-4 h-4 text-brand-light" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Put These Tips Into Action?
          </h3>
          <p className="text-gray-700 mb-6 leading-relaxed max-w-2xl mx-auto">
            Reading about lawn care is great, but sometimes you need professional help to get the job done right. 
            Let us handle the hard work while you enjoy your beautiful property.
          </p>
          <button
            onClick={scrollToContact}
            className="bg-gradient-to-r from-brand-light to-brand-dark text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-brand-dark hover:to-brand-light transition-all duration-300 shadow-lg"
          >
            Get Your Free Estimate
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogList;