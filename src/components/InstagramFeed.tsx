import React, { useState } from 'react';
import { Instagram, Heart, MessageCircle, ExternalLink, Check } from 'lucide-react';

export default function InstagramFeed() {
  const instagramUrl = "https://www.instagram.com/theorganisededitmanchester";
  const handle = "@theorganisededitmanchester";

  const [isFollowing, setIsFollowing] = useState(() => {
    try {
      const saved = localStorage.getItem('instagram_followed_theorganisededit');
      return saved === 'true';
    } catch {
      return false;
    }
  });

  const handleFollowClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const nextState = !isFollowing;
    setIsFollowing(nextState);
    try {
      localStorage.setItem('instagram_followed_theorganisededit', nextState ? 'true' : 'false');
    } catch (err) {
      console.warn("Storage write failed:", err);
    }
  };

  const posts = [
    {
      id: 1,
      image: "/src/assets/images/organized_pantry_shelves_1783305692550.jpg",
      caption: "Pantry goals! Glass jars, decanted dry foods, and custom label styling.",
      likes: 412,
      comments: 28,
    },
    {
      id: 2,
      image: "/src/assets/images/organized_closet_hero_1783305649580.jpg",
      caption: "A sensory-safe wardrobe edit. Uniform hangers and color groupings.",
      likes: 318,
      comments: 19,
    },
    {
      id: 3,
      image: "/src/assets/images/vision_kitchen_1783307229646.jpg",
      caption: "Calm mornings in structured spaces. Amber bottles and eucalyptus accents.",
      likes: 529,
      comments: 42,
    },
    {
      id: 4,
      image: "/src/assets/images/values_vase_1783307251210.jpg",
      caption: "Minimal styling elements can completely transform your home's vibe.",
      likes: 287,
      comments: 15,
    },
    {
      id: 5,
      image: "/src/assets/images/welcome_shelves_1783307210267.jpg",
      caption: "Arched shelf layouts. Practical storage containers styled beautifully.",
      likes: 641,
      comments: 53,
    },
    {
      id: 6,
      image: "/src/assets/images/photography_style_1783307269383.jpg",
      caption: "Organised drawer details. Custom dividers for maximum ease.",
      likes: 384,
      comments: 22,
    }
  ];

  return (
    <section id="instagram" className="bg-[#F7F6F2] py-16 md:py-24 border-b border-[#E6DED4]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Profile Header */}
        <div className="max-w-3xl mx-auto mb-12 bg-white rounded-2xl border border-[#E6DED4] p-6 sm:p-8 shadow-2xs flex flex-col sm:flex-row items-center gap-6 sm:gap-10 text-left">
          
          {/* Avatar Area */}
          <a 
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="relative shrink-0 group cursor-pointer"
            id="instagram-avatar-link"
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full p-[3px] bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full rounded-full bg-white p-[2px]">
                <img 
                  src="/src/assets/images/beth_danielle_founders_1783305671597.jpg"
                  alt="The Organised Edit Profile"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 bg-[#2B2B2B] text-white p-1.5 rounded-full border border-white">
              <Instagram className="w-4 h-4" />
            </div>
          </a>

          {/* User Profile Information */}
          <div className="flex-1 space-y-4 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 justify-center sm:justify-start">
              <a 
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#2B2B2B] hover:text-[#A89A8A] transition-colors flex items-center justify-center sm:justify-start gap-1.5"
                id="instagram-username-link"
              >
                <span>{handle}</span>
                <ExternalLink className="w-4 h-4 text-stone-400 stroke-[1.5]" />
              </a>
              <button 
                onClick={handleFollowClick}
                className={`inline-flex items-center justify-center gap-1 px-5 py-1.5 rounded font-sans text-[10px] tracking-widest font-bold uppercase transition-all duration-300 cursor-pointer ${
                  isFollowing 
                    ? 'bg-[#E6DED4] text-stone-800 border border-stone-300 hover:bg-[#D6CEC2]' 
                    : 'bg-[#5F6659] text-white hover:bg-[#A3B29A]'
                }`}
                id="instagram-header-follow-btn"
              >
                {isFollowing ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-700 stroke-[3]" />
                    <span>Following</span>
                  </>
                ) : (
                  <span>Follow</span>
                )}
              </button>
            </div>

            {/* Profile Statistics */}
            <div className="flex gap-6 justify-center sm:justify-start text-xs font-sans text-stone-600 border-t border-b border-stone-100 py-2">
              <div>
                <strong className="text-[#2B2B2B]">30</strong> posts
              </div>
              <div>
                <strong className="text-[#2B2B2B]">{isFollowing ? 501 : 500}</strong> followers
              </div>
              <div>
                <strong className="text-[#2B2B2B]">10</strong> following
              </div>
            </div>

            {/* Biography details */}
            <div className="space-y-1 text-xs">
              <h4 className="font-sans font-bold text-[#2B2B2B]">The Organised Edit • Home Organisers & Stylists</h4>
              <p className="font-body text-stone-500 leading-relaxed">
                Beth & Danielle. Creating beautifully calm, structured & functional spaces for busy and neurodivergent homes across Greater Manchester & Cheshire. 🤍
              </p>
              <div className="flex items-center justify-center sm:justify-start gap-2 pt-1">
                <span className="w-2 h-2 rounded-full bg-[#A3B29A] animate-pulse"></span>
                <span className="font-mono text-[10px] text-[#A89A8A] uppercase tracking-wider font-bold">Mock synced live feed</span>
              </div>
            </div>
          </div>

        </div>

        {/* Grid of Feed Posts */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {posts.map((post) => (
            <a 
              key={post.id}
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="group relative block aspect-square rounded-2xl overflow-hidden bg-stone-100 border border-[#E6DED4]/60 shadow-xs hover:shadow-md transition-all duration-300"
              id={`instagram-post-${post.id}`}
            >
              <img 
                src={post.image} 
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-[#2B2B2B]/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 sm:p-6 text-left">
                
                {/* Likes / Comments Count */}
                <div className="flex justify-end gap-4 text-white text-xs font-sans font-medium">
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4 fill-white stroke-none" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4 fill-white stroke-none" />
                    <span>{post.comments}</span>
                  </div>
                </div>

                {/* Post Caption */}
                <div className="space-y-2">
                  <p className="text-white text-[11px] sm:text-xs font-body leading-relaxed line-clamp-3">
                    {post.caption}
                  </p>
                  <span className="block font-sans text-[9px] tracking-widest text-[#CFC6BB] uppercase font-bold">
                    View on Instagram
                  </span>
                </div>

              </div>
            </a>
          ))}
        </div>

        {/* Call to Action Button */}
        <div className="text-center pt-10">
          <button 
            onClick={handleFollowClick}
            className={`inline-flex items-center gap-2 px-8 py-3.5 rounded font-sans text-xs tracking-widest font-bold uppercase transition-all shadow-2xs hover:shadow-xs cursor-pointer ${
              isFollowing
                ? 'bg-[#E6DED4] text-stone-800 hover:bg-[#D6CEC2]'
                : 'bg-[#2B2B2B] text-[#F4F1EC] hover:bg-[#5F6659]'
            }`}
            id="instagram-follow-btn"
          >
            {isFollowing ? (
              <>
                <Check className="w-4 h-4 text-emerald-700 stroke-[3]" />
                <span>FOLLOWING @theorganisededitmanchester</span>
              </>
            ) : (
              <>
                <Instagram className="w-4 h-4" />
                <span>FOLLOW @theorganisededitmanchester</span>
              </>
            )}
          </button>
        </div>

      </div>
    </section>
  );
}
