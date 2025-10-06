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
      title: 'How to Buy ChatGPT Premium Models in BD?',
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
    }
  ];
}