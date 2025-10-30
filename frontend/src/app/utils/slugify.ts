export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')        // Replace spaces with -
    .replace(/[^\w\-]+/g, '')    // Remove all non-word chars
    .replace(/\-\-+/g, '-')      // Replace multiple - with single -
    .replace(/^-+/, '')          // Trim - from start of text
    .replace(/-+$/, '');         // Trim - from end of text
}

export function createBlogData() {
  return [
    {
      id: 1,
      title: 'Llama 3.3 Vs. Grok 3',
      excerpt: 'OneBrain is just launched 3.3 brings faster performance, smarter reach. Llama 3.3 is a smart language model. It can help like chatting, coding...',
      image: 'https://digitxevents.com/wp-content/uploads/2025/04/Blog-Poster.png',
      content: `
        <h2>Llama 3.3 vs Grok 3: A Comprehensive Comparison</h2>
        <p>In the rapidly evolving landscape of artificial intelligence, two powerful language models have emerged as frontrunners: Llama 3.3 and Grok 3. This comprehensive comparison explores their capabilities, strengths, and use cases.</p>
        
        <h3>Performance and Capabilities</h3>
        <p>Llama 3.3 brings significant improvements in performance and efficiency. The model demonstrates enhanced understanding of context, better code generation, and more accurate responses across various domains.</p>
        
        <h3>Key Features</h3>
        <ul>
          <li>Advanced natural language processing</li>
          <li>Improved context retention</li>
          <li>Enhanced coding capabilities</li>
          <li>Better multilingual support</li>
        </ul>

        <h3>Real-World Applications</h3>
        <p>Both models excel in different scenarios:</p>
        <ul>
          <li>Content Creation and Editing</li>
          <li>Code Generation and Review</li>
          <li>Data Analysis and Insights</li>
          <li>Educational Support</li>
        </ul>

        <h3>Technical Specifications</h3>
        <p>Llama 3.3 features:</p>
        <ul>
          <li>Improved token processing speed</li>
          <li>Enhanced memory efficiency</li>
          <li>Better context window management</li>
          <li>Advanced reasoning capabilities</li>
        </ul>

        <h3>Future Implications</h3>
        <p>The development of these models represents a significant step forward in AI technology, promising even more advanced capabilities in future iterations.</p>
      `
    },
    {
      id: 2,
      title: 'Llama 3.3 and Chatgpt 4.0',
      excerpt: 'Introduced in May 2024, GPT-4o represents OpenAI\'s most advanced flagship multimodal model to date, engineered to be the fastest and most...',
      image: 'https://digitxevents.com/wp-content/uploads/2025/04/2-3.png',
      content: `
        <h2>Llama 3.3 and ChatGPT 4.0: The Future of AI</h2>
        <p>The collaboration between Llama 3.3 and ChatGPT 4.0 marks a new era in artificial intelligence. These powerful models complement each other\'s strengths, offering unprecedented capabilities in natural language processing and understanding.</p>
        
        <h3>Integration Benefits</h3>
        <p>The integration of these models provides users with a comprehensive suite of AI capabilities, from advanced text generation to complex problem-solving.</p>
        
        <h3>Key Advantages</h3>
        <ul>
          <li>Enhanced processing speed</li>
          <li>Improved accuracy in responses</li>
          <li>Better context understanding</li>
          <li>Advanced multimodal capabilities</li>
        </ul>

        <h3>Technical Innovations</h3>
        <p>The combination brings several technical improvements:</p>
        <ul>
          <li>Advanced neural architectures</li>
          <li>Improved training methodologies</li>
          <li>Enhanced data processing</li>
          <li>Better resource utilization</li>
        </ul>

        <h3>Practical Applications</h3>
        <p>These models excel in various domains:</p>
        <ul>
          <li>Business Analytics</li>
          <li>Creative Content Generation</li>
          <li>Scientific Research</li>
          <li>Educational Support</li>
        </ul>

        <h3>Future Developments</h3>
        <p>Looking ahead, we can expect continued improvements and innovations in:</p>
        <ul>
          <li>Model Efficiency</li>
          <li>Response Accuracy</li>
          <li>Resource Optimization</li>
          <li>User Experience</li>
        </ul>
      `
    },
    {
      id: 3,
      title: 'DeepSeek VS. ChatGPT',
      excerpt: 'AI chatbots have become essential tools in personal and professional settings, transforming how we communicate, create, and solve problems....',
      image: 'https://digitxevents.com/wp-content/uploads/2025/04/blog3.png',
      content: `
        <h2>DeepSeek vs ChatGPT: A Detailed Analysis</h2>
        <p>As AI chatbots continue to evolve, DeepSeek and ChatGPT have emerged as leading solutions in the market. This comparison explores their unique features, capabilities, and use cases.</p>
        
        <h3>Comparative Analysis</h3>
        <p>Both platforms offer unique advantages in different scenarios. While ChatGPT excels in general conversation and creative tasks, DeepSeek shows particular strength in specialized domains.</p>
        
        <h3>Key Differences</h3>
        <ul>
          <li>Specialized vs. General Purpose</li>
          <li>Technical Capabilities</li>
          <li>Use Case Optimization</li>
          <li>Integration Options</li>
        </ul>

        <h3>Performance Metrics</h3>
        <p>Comparing key performance indicators:</p>
        <ul>
          <li>Response Time</li>
          <li>Accuracy Rates</li>
          <li>Context Retention</li>
          <li>Resource Efficiency</li>
        </ul>

        <h3>Industry Applications</h3>
        <p>Each model excels in specific industries:</p>
        <ul>
          <li>Healthcare and Medical Research</li>
          <li>Financial Services</li>
          <li>Education and Training</li>
          <li>Software Development</li>
        </ul>

        <h3>Future Outlook</h3>
        <p>The competition between these platforms drives innovation in:</p>
        <ul>
          <li>Model Architecture</li>
          <li>Training Methodologies</li>
          <li>User Interface Design</li>
          <li>Integration Capabilities</li>
        </ul>
      `
    },
    {
      id: 4,
      title: 'How to Buy ChatGPT Premium Models in BD? ',
      excerpt: 'Buy ChatGPT-4, 4.1 nano & ChatGPT-5 in Bangladesh with OneBrain. Pay in BDT, start instantly, and Bangla prompts...',
      image: 'https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/Chatgpt-in-Bangladesh-5.png',
      content: `
        <h2>How to Buy ChatGPT Premium Models in Bangladesh</h2>
        <p>Buy ChatGPT-4, 4.1 nano & ChatGPT-5 in Bangladesh with OneBrain. Pay in BDT, start instantly, and use Bangla prompts—compare plans and buy today.</p>
        
        <h3>Why Choose OneBrain for ChatGPT in Bangladesh?</h3>
        <p>Your time is valuable, and the right platform matters. Here\'s why Bangladeshi users trust OneBrain:</p>
        
        <ul>
          <li><strong>Premium Models at Your Fingertips</strong> – Get instant access to ChatGPT-4o, ChatGPT-4.1 nano, mini, and the latest ChatGPT-5 with updates as future models arrive.</li>
          <li><strong>Local Convenience</strong> – No VPNs or foreign cards. Use ChatGPT directly in Bangladesh.</li>
          <li><strong>Bangla-Friendly Features</strong> – From ChatGPT prompts in Bangla to a complete ChatGPT Bangla tutorial, OneBrain supports your language and workflow.</li>
          <li><strong>Affordable Plans</strong> – Compare ChatGPT pricing, including the newest ChatGPT 4 price, ChatGPT Plus price, ChatGPT yearly subscription, and ChatGPT Pro subscription—all shown in BDT.</li>
          <li><strong>Guided Upgrades</strong> – Looking to buy ChatGPT Plus in Bangladesh, manage your subscription, or grab the best ChatGPT deals? OneBrain makes the process simple and walks you through each step.</li>
        </ul>

        <h3>What You Can Do with ChatGPT on OneBrain</h3>
        <p>OneBrain isn\'t just about access—it\'s about possibilities. Here are some of the most popular ways people in Bangladesh use ChatGPT every day:</p>

        <ul>
          <li><strong>Create and Edit Content</strong> – Craft perfect Bangla blog posts, polish writing with a quick grammar check, or generate unique ChatGPT prompts for photo editing and other creative projects.</li>
          <li><strong>Teach and Learn</strong> – Teachers prepare lessons and assignments, while students use ChatGPT for research, study guides, grammar checks, and practice exercises to improve their learning.</li>
          <li><strong>Grow Your Business</strong> – Entrepreneurs write ads, plan marketing campaigns, and brainstorm new ideas.</li>
          <li><strong>Explore Advanced AI</strong> – Experiment with tools like the ChatGPT agent for automation, try fun prompts such as ChatGPT Ghibli AI, or test exciting new features like ChatGPT 4.1 nano, available free as they roll out.</li>
        </ul>

        <h3>Creative ChatGPT Prompts You Should Try</h3>
        <p>Here are some trending ChatGPT prompts Bangladesh users love:</p>

        <ul>
          <li><strong>ChatGPT Prompt for Photo Editing:</strong> "Suggest 10 unique Photoshop photo editing ideas for Instagram."</li>
          <li><strong>ChatGPT Grammar Check:</strong> "Check grammar and improve this paragraph for a Bangla blog."</li>
          <li><strong>ChatGPT Image Edit Prompt:</strong> "Create a Ghibli-style AI art description for a Dhaka street view."</li>
          <li><strong>ChatGPT Ghibli AI Prompt:</strong> "Generate a dreamy Studio Ghibli-inspired village scene description."</li>
        </ul>

        <h3>How to Buy ChatGPT in Bangladesh (Step-by-Step)</h3>
        <p>Getting started with OneBrain is fast and easy:</p>

        <ol>
          <li>Sign up at OneBrain</li>
          <li>Choose the plan you want</li>
          <li>Pay securely in BDT using local payment methods (no VPN or foreign card)</li>
          <li>Get instant access to ChatGPT-4, ChatGPT-4.1, ChatGPT-5 and other models</li>
        </ol>

        <p>No technical headaches, no confusing payment steps—just smarter AI whenever you need it.</p>

        <h3>Experience Smarter AI Today</h3>
        <p>Your creativity, productivity, and business deserve the best. Get started with OneBrain to unlock easy and affordable ChatGPT buy BD deals, experiment with a ChatGPT image edit prompt, or enjoy the powerful features of ChatGPT-4 and ChatGPT-5 and many more models —all tailored for Bangladesh.</p>
      `
    },
    {
      id: 5,
      title: 'Buy Sora 2 & Sora 2 Pro in Bangladesh — Only on OneBrain with 10+ Free AI Tools',
      excerpt: 'Buy Sora 2 (699 Taka) and Sora 2 Pro (1,999 Taka) exclusively on OneBrain in Bangladesh! Get 10+ premium AI tools free...',
      image: 'https://digitxevents.com/wp-content/uploads/2025/04/blog3.png',
      link: `/blog/${slugify('Buy Sora 2 & Sora 2 Pro in Bangladesh')}`,
      content: `
        <main className="relative pt-24">
  {/* Hero Section */}
  <div className="relative w-full h-[40vh]">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-indigo-700 to-purple-700" />
    <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
  </div>

  <div className="relative px-6 py-12">
    <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-full mx-auto">
      <h1 className="text-4xl font-bold text-blue-900 mb-4">
        Buy Sora 2 & Sora 2 Pro in Bangladesh — Only on OneBrain with 10+ Free AI Tools
      </h1>

      {/* Introduction */}
      <section className="mb-8">
        <p className="text-gray-700 leading-relaxed">
          The future of content creation, Sora 2 and Sora 2 Pro are now available exclusively on
          <a
            href="https://www.onebrain.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-semibold"
          >
            OneBrain
          </a>
          in Bangladesh. These advanced AI models, powered by OpenAI, turn your text or images into professional videos in just a few clicks. Whether you’re a content creator, marketer, educator, or business professional, Sora AI gives you the tools to produce high-quality, eye-catching videos without expensive equipment or complex software.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          <strong>Sora AI empowers creators to:</strong>
        </p>
        <ul className="list-disc pl-6 text-gray-700 leading-relaxed mt-2 space-y-2">
          <li>Make engaging explainer videos that simplify complex ideas</li>
          <li>Create attention-grabbing social media content instantly</li>
          <li>Produce marketing campaigns with professional visuals and effects</li>
          <li>Develop educational and training videos that captivate and teach effectively</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mt-4">
          With Sora 2 and Sora 2 Pro, professional video creation is accessible, affordable, and hassle-free. Fast, stunning videos are now entirely in your hands — powered by Sora AI.
        </p>
      </section>

      {/* What is Sora 2 & Sora 2 Pro */}
      <section className="mb-8 text-gray-800">
        <h2 className="text-2xl font-semibold mb-4">What is Sora 2 &amp; Sora 2 Pro?</h2>
        <p className="text-gray-700 leading-relaxed">
          Sora AI is OpenAI's video generation model that creates realistic videos from text prompts. It can now also produce synchronized audio, including dialogue, sound effects, and music in minutes. Perfect for bloggers, educators, marketers, and freelancers, Sora 2 simplifies the process of turning ideas into polished content.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          <strong>Sora 2 Pro</strong> builds on this with enhanced rendering, longer video duration, and premium AI features, making it ideal for high-quality campaigns, professional presentations, and large-scale multimedia projects.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Key Features</h3>
        <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
          <li><strong>Text-to-Video:</strong> Instantly convert scripts, articles, or blog posts into dynamic videos</li>
          <li><strong>AI Image-to-Video:</strong> Turn images into professional videos using intelligent AI prompts</li>
          <li><strong>High-Quality Output:</strong> Suitable for YouTube, social media, marketing campaigns, and presentations</li>
          <li><strong>User-Friendly Interface:</strong> Easy for both beginners and professionals</li>
          <li><strong>OpenAI-Powered Intelligence:</strong> Accurate, creative, and context-aware video generation</li>
          <li><strong>Fast & Efficient:</strong> Create professional videos much faster than traditional editing methods</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mt-4">
          Whether you’re a YouTuber, marketer, teacher, or freelancer, Sora AI makes video creation fast, simple, and visually stunning.
        </p>
      </section>

      {/* Comparison Table */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Sora 2 vs Sora 2 Pro: Feature Comparison</h2>
        <p className="text-gray-700 leading-relaxed">
          Not sure which version is right for you? The table below highlights key differences in features, video quality, customization options, and advanced capabilities.
        </p>
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full border border-gray-200 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left font-semibold border-b">Feature</th>
                <th className="px-4 py-3 text-left font-semibold border-b">Sora 2</th>
                <th className="px-4 py-3 text-left font-semibold border-b">Sora 2 Pro</th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-white even:bg-gray-50">
                <td className="px-4 py-3 align-top border-t">Resolution</td>
                <td className="px-4 py-3 align-top border-t">Up to 1280×720 (HD)</td>
                <td className="px-4 py-3 align-top border-t">Up to 1792×1024 (HD), higher resolutions</td>
              </tr>
              <tr className="odd:bg-white even:bg-gray-50">
                <td className="px-4 py-3 align-top border-t">Video Quality</td>
                <td className="px-4 py-3 align-top border-t">Standard quality for most use cases</td>
                <td className="px-4 py-3 align-top border-t">Professional-grade, cinematic-quality</td>
              </tr>
              <tr className="odd:bg-white even:bg-gray-50">
                <td className="px-4 py-3 align-top border-t">Performance</td>
                <td className="px-4 py-3 align-top border-t">Great for rapid generation & prototyping</td>
                <td className="px-4 py-3 align-top border-t">Optimized for stable, commercial use</td>
              </tr>
              <tr className="odd:bg-white even:bg-gray-50">
                <td className="px-4 py-3 align-top border-t">Target Audience</td>
                <td className="px-4 py-3 align-top border-t">Creators, social media, prototypes, education</td>
                <td className="px-4 py-3 align-top border-t">Advertisers, filmmakers, marketing professionals</td>
              </tr>
              <tr className="odd:bg-white even:bg-gray-50">
                <td className="px-4 py-3 align-top border-t">Use Cases</td>
                <td className="px-4 py-3 align-top border-t">Quick production, social content, product demos</td>
                <td className="px-4 py-3 align-top border-t">High-res commercials, ads, professional films</td>
              </tr>
              <tr className="odd:bg-white even:bg-gray-50">
                <td className="px-4 py-3 align-top border-t">Audio-Visual Sync</td>
                <td className="px-4 py-3 align-top border-t">Standard synchronization</td>
                <td className="px-4 py-3 align-top border-t">Enhanced synchronization for pro results</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Buy on OneBrain */}
      <section className="mb-8 text-gray-800">
        <h2 className="text-2xl font-semibold mb-4">
          Buy Sora 2 &amp; Sora 2 Pro in Bangladesh — Affordable, Personal, and All-in-One!
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Looking for Sora 2 or Sora 2 Pro at the best price in Bangladesh? OneBrain is your ultimate destination. Not only do you get access to OpenAI-powered video generation, you also unlock 10+ premium AI tools for text, image, audio, and video — all in one platform.
        </p>
        <h3 className="text-xl font-semibold mt-4 mb-2">Why choose OneBrain?</h3>
        <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
          <li><strong>Affordable Pricing:</strong> Sora 2 for 699 Taka, Sora 2 Pro for 1,999 Taka</li>
          <li><strong>Exclusive Access:</strong> The only platform in Bangladesh offering Sora 2 &amp; Sora 2 Pro</li>
          <li><strong>All-in-One Platform:</strong> Create text, image, audio, and video content without multiple subscriptions</li>
          <li><strong>Fully Personal Accounts:</strong> No sharing, no privacy concerns</li>
          <li><strong>Privacy Assured:</strong> Your projects and data remain secure</li>
          <li><strong>Zero Hassle:</strong> Instant access after purchase; no waiting, no complicated setups</li>
          <li><strong>Experiment Freely:</strong> Thousands of Pro Tokens and unlimited chat & attachments with advanced AI models</li>
        </ul>
      </section>

      {/* Plans & Pricing */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Plans &amp; Pricing</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="text-xl font-semibold">Creator Pack — <span className="font-bold">৳699</span></h3>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed mt-2 space-y-2">
              <li>Includes <strong>Sora 2</strong> — AI text-to-video and image-to-video</li>
              <li>Access to 10+ premium AI tools</li>
              <li>Trending tools: Nano Banana, Kontext Restore, Runway ML, Hailuo, Seedance, VGen, ElevenLabs, Udio AI, Humanizer</li>
              <li><strong>15,00,000 Pro Tokens</strong> usable across all AI models</li>
              <li>Unlimited chat & attachments even after Pro Tokens are used</li>
              <li>Ideal for videos, social media content, marketing materials, and multimedia projects</li>
              <li>All tools accessible from one dashboard</li>
            </ul>
          </div>
          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="text-xl font-semibold">Performance Pack — <span className="font-bold">৳1,999</span></h3>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed mt-2 space-y-2">
              <li>Includes <strong>Sora 2 Pro</strong> — faster rendering and up to 4K output</li>
              <li>Everything in Creator Pack plus additional tools for professionals</li>
              <li>Additional tools: <strong>KlingAI All Models</strong> for advanced video generation</li>
              <li><strong>45,00,000 Pro Tokens</strong> usable across all AI models</li>
              <li>Unlimited chat & attachments even after Pro Tokens are finished</li>
              <li>Designed for professional creators, agencies, and filmmakers</li>
            </ul>
          </div>
        </div>
      </section>

      {/* What You Can Do */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What You Can Do with Sora AI via OneBrain</h2>
        <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
          <li><strong>Convert Text into Videos:</strong> Turn articles, scripts, or blog posts into engaging videos</li>
          <li><strong>Generate Videos from Images:</strong> Use images as references for professional video creation</li>
          <li><strong>Experiment with Premium AI Tools:</strong> Access 10+ AI tools to enhance your workflow</li>
          <li><strong>Produce Multimedia Projects:</strong> Combine text, video, and audio for social media, presentations, or campaigns</li>
        </ul>
      </section>

      {/* Free Tools Included */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Free AI Tools Included in the Packs</h2>
        <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
          <li><strong>Text & Chat AI:</strong> ChatGPT, Claude, Gemini, Qwen, Grok, DeepSeek</li>
          <li><strong>Video AI:</strong> Runway ML, Hailuo, Seedance, VGen, KlingAI</li>
          <li><strong>Audio & Music AI:</strong> ElevenLabs AI, Udio AI</li>
          <li><strong>Image & Graphics AI:</strong> Nano Banana, Kontext Restore, Gemini Banana AI</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mt-2">
          All tools come free with the packs, creating a complete multimedia AI studio in one subscription.
        </p>
      </section>

      {/* How to Buy */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Where and How to Buy Sora 2 &amp; Sora 2 Pro in Bangladesh</h2>
        <ol className="list-decimal pl-6 text-gray-700 leading-relaxed space-y-2">
          <li>Visit <a className="text-blue-600 hover:underline font-semibold" href="https://onebrain.app" target="_blank" rel="noopener noreferrer">OneBrain</a>.</li>
           <li>Sign up using your email and phone number</li>
           <li>Click on Try Pro button on the bottom left corner</li>
          <li>Select your pack: Creator Pack (৳699) or Performance Pack (৳1,999)</li>
          <li>Pay securely — local and international options like <strong>bKash</strong>, <strong>Nagad</strong>, and <strong>VISA</strong> are supported</li>
          <li>Start creating — instant access to Sora AI and the full suite of AI tools</li>
        </ol>
      </section>

      {/* FAQs */}
      <section className="mb-8 text-gray-800">
        <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-2">
          {/* Replace with map for dynamic */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button className="w-full flex justify-between items-center p-4 bg-gray-100 hover:bg-gray-200 focus:outline-none">
              <span className="font-medium">What is Sora 2 and Sora 2 Pro?</span>
              <span>▼</span>
            </button>
            <div className="p-4 text-gray-700 border-t border-gray-200">
              Sora 2 generates videos from text or images, and Sora 2 Pro adds enhanced rendering, longer durations, and premium features for higher-quality outputs.
            </div>
          </div>
          {/* Repeat FAQ items similarly */}
        </div>
      </section>

      {/* Final Thought */}
      <section className="mt-8 text-gray-800">
        <h2 className="text-2xl font-semibold mb-4">Final Thought</h2>
        <p className="text-gray-700 leading-relaxed">
          If you are looking for hassle-free, fully personal, and secure AI tools, OneBrain is your ultimate choice for Sora 2 and Sora 2 Pro in Bangladesh. For professional-quality AI video creation, buying Sora 2 & Sora 2 Pro via OneBrain is the smartest decision:
        </p>
        <ul className="list-disc pl-6 text-gray-700 leading-relaxed mt-2 space-y-2">
          <li><strong>Sora 2 (৳699)</strong> — AI text-to-video and image-to-video generation</li>
          <li><strong>Sora 2 Pro (৳1,999)</strong> — Advanced features for higher-quality, longer videos</li>
          <li><strong>10+ premium AI tools</strong> included in each pack</li>
          <li>OneBrain’s all-in-one platform for text, image, audio, and video creation</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mt-4">
          Start creating today at <a className="text-blue-600 hover:underline font-semibold" href="https://www.onebrain.app" target="_blank" rel="noopener noreferrer">onebrain.app</a> and unlock Sora 2, Sora 2 Pro, and 10+ premium AI tools — all with your chosen plan, fully personal, secure, and hassle-free.
        </p>
      </section>
    </div>
  </div>
</main>

      `
    },
  ];
}

// Sanitize helper: remove JSX-style comments ({/* ... */}) that were accidentally included inside
// the HTML template strings, and convert `className=` to `class=` so injected HTML uses valid
// attributes when rendered with dangerouslySetInnerHTML.
function sanitizeContent(content: string) {
  if (!content) return content;
  // Remove JSX comments like {/* comment */}
  const withoutJsxComments = content.replace(/\{\/\*[\s\S]*?\*\/\}/g, '');
  // Replace React's className with class for raw HTML
  const withClassAttrs = withoutJsxComments.replace(/className=/g, 'class=');
  return withClassAttrs;
}

// Export a sanitized copy of the blog data so pages receive clean HTML
export function createBlogDataSanitized() {
  return createBlogData().map((b) => ({ ...b, content: sanitizeContent(b.content) }));
}