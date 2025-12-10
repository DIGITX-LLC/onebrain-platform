"use client";
import { Star, Zap, Crown, Sparkles, CheckCircle2, Check } from "lucide-react";
import Image from "next/image";

// Import icons for AI models and tools
const AIModelIcons: Record<string, string> = {
  chatgpt: '/assets/models/chatgpt.svg',
  gemini: '/assets/models/gemini.svg',
  claudeWhite: '/assets/models/cloude-White.svg',
  deepseek: '/assets/models/deepseek.svg',
  grok: '/assets/models/grok.svg',
  llama: '/assets/models/llama.svg',
  perplexity: '/assets/models/perplexity.svg',
  mistral: '/assets/models/mistral.svg',
  qwenBlack: '/assets/models/qwen-black.svg',
  alimAiWhite: '/assets/models/AlimAi-w.svg',
  kontextRestore: '/assets/models/flux-w.svg'

};

const AIToolsIcons: Record<string, string> = {
  imageXWhite: '/assets/models/ImageX White.png',
  fluxWhite: '/assets/models/flux-w.svg',
  seedream:'https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/Seedream.png',
  klingWhite: '/assets/models/kling-white.svg',
  veo3: '/assets/models/veo3-black.png',
  veo3Black: '/assets/models/veo3-black.png',
  vGenWhite: '/assets/models/vGen-white.svg',
  seedanceWhite: 'https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/seedance.png',
  hailuo: 'https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/hailuo-color.png',
  wanWhite: '/assets/models/qwen-black.svg',
  voiceWhite: '/assets/models/voice-white.svg',
  runwayWhite: '/assets/models/runway-white.png',
  runwayml: '/assets/models/runway-white.png',
  humanizerWhite: '/assets/models/Humanizer White.svg',
  restorerWhite: '/assets/models/flux-w.svg',
  quizMakerWhite: 'https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/quiz-maker.svg',
  // elevenlabsWhite: '/assets/models/elevenlabs.svg',
  elevenlabsWhite: 'https://digitx-storage.blr1.cdn.digitaloceanspaces.com/onebrainweb/elevenlabs%20(1).svg',
  // soraWhite: 'https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/sora-color.svg',
  soraWhite: 'https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/sora.svg',
  // udio:'/assets/models/udio-white.png',
  // udio:'/assets/models/udio-white.png',
  lightricks:'https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/lightricks.png'
};

interface GenerateImageUpTo {
  [key: string]: {
    title: string;
    subFeatures: string[];
  };
}

interface GenerateVideosUpTo {
  [key: string]: {
    title: string;
    subFeatures: string[];
  };
}

interface Plan {
  _id: string;
  name: string;
  price: number;
  offer_price?: number;
  interval?: string;
  bestFor?: string;
  features?: (string | { GenerateImageUpTo?: GenerateImageUpTo; GenerateVideosUpTo?: GenerateVideosUpTo })[];
  tokens?: number;
}

interface TopUpPlan {
  _id: string;
  name: string;
  price: number;
  tokens: number;
  bestFor?: string;
  features?: string[];
}

interface PlanAndTopUpPlanProps {

  topUpPlans: TopUpPlan[];
  currentPlan: Plan | null;
  location: string;
  handleSelectPlan: (params: { planId?: string; topUpId?: string }) => void;
}

export default function PricingAbout({

  topUpPlans,
  currentPlan,
  location,
  handleSelectPlan,
}: PlanAndTopUpPlanProps) {
  const currencySymbol = location === "bd" ? "৳" : "$";

  // Helper function to get AI model icon
  const getModelIcon = (modelName: string) => {
    const modelNameLower = modelName.toLowerCase();

    // Map model names to their corresponding icons
    const modelIconMap: { [key: string]: string } = {
      'chatgpt': 'chatgpt',
      'gpt': 'chatgpt',
      'gemini': 'gemini',
      'claude': 'claudeWhite',
      'deepseek': 'deepseek',
      'grok': 'grok',
      'llama': 'llama',
      'perplexity': 'perplexity',
      'mistral': 'mistral',
      'qwen': 'qwenBlack',
      'alimai': 'alimAiWhite',
      'alim ai': 'alimAiWhite',
      'nano banana': 'veo3Black',
      'kontext restore': 'kontextRestore',
      'hailuo': 'hailuo',
      
    };

    // Find matching model name
    for (const [key, iconKey] of Object.entries(modelIconMap)) {
      if (modelNameLower.includes(key)) {
        return AIModelIcons[iconKey as keyof typeof AIModelIcons];
      }
    }

    return null;
  };

  // Helper function to get AI tool icon
  const getToolIcon = (toolName: string) => {
    const toolNameLower = toolName.toLowerCase();

    // Map tool names to their corresponding icons
    const toolIconMap: { [key: string]: string } = {
      // ===== AI TOOLS (from Tools-Data) =====
      // 'sora v2 pro': 'soraWhite',
      // 'sora v2': 'soraWhite',
      'sora': 'soraWhite',
      // 'sora pro': 'soraWhite',
  
      'imagex': 'imageXWhite',
      'flux': 'fluxWhite',
      'seedream': 'seedream',
      'see dance': 'seedanceWhite',
      'see-dance': 'seedanceWhite',
      'kling': 'klingWhite',
      'klingai': 'klingWhite',
      'veo3': 'veo3',
      'veo 3.1 fast': 'veo3',
      'vgen': 'vGenWhite',
      'pixverse': 'vGenWhite',
      'litetricks': 'vGenWhite',
      'seedance': 'seedanceWhite',
      'hailuo': 'hailuo',
      'wan': 'wanWhite',
      'speechai': 'voiceWhite',
      'elevenlabs': 'elevenlabsWhite',
      'runway': 'runwayWhite',
      'runwayml': 'runwayWhite',
      'humanizer': 'humanizerWhite',
      'restorer': 'restorerWhite',
      'kontext': 'restorerWhite',
      'kontext pro': 'fluxWhite',
      'kontext restore': 'restorerWhite',
      'kontext upscaler': 'restorerWhite',
      'quiz maker': 'quizMakerWhite',
      'study mode': 'quizMakerWhite',
      'elevenlabsWhite': 'elevenlabsWhite',
      'nano banana': 'veo3',
      
      // 'udio': 'udio',
      'lightricks':'lightricks',

      // ===== SPECIAL MODEL MAPPINGS =====
      // Google Imagen 4 -> Gemini logo
      'google imagen 4': 'gemini',
      'google imagen': 'gemini',
      'imagen 4': 'gemini',
      'imagen': 'gemini',

      // ChatGPT 4o -> ChatGPT logo
      'chatgpt 4o': 'chatgpt',
      'gpt 4o': 'chatgpt',
      'gpt4o': 'chatgpt'
    };

    // Find matching tool name
    for (const [key, iconKey] of Object.entries(toolIconMap)) {
      if (toolNameLower.includes(key)) {
        // Check if it's a model icon (from AIModelIcons) or tool icon (from AIToolsIcons)
        if (AIModelIcons[iconKey as keyof typeof AIModelIcons]) {
          return AIModelIcons[iconKey as keyof typeof AIModelIcons];
        } else if (AIToolsIcons[iconKey as keyof typeof AIToolsIcons]) {
          return AIToolsIcons[iconKey as keyof typeof AIToolsIcons];
        }
      }
    }

    return null;
  };

  // Helper function to render feature with icon
  const renderFeatureWithIcon = (feature: string, isSubFeature: boolean = false) => {
    const modelIcon = getModelIcon(feature);
    const toolIcon = getToolIcon(feature);
    const icon = modelIcon || toolIcon;

    if (icon) {
      const isExternal = icon.startsWith('http');
      const iconClass = `object-contain ${isExternal ? '' : 'brightness-0 invert opacity-90'}`;
      return (
        <div className={`flex items-center gap-1.5 ${isSubFeature ? 'ml-1' : ''} py-0.5`}>
          <div className="relative w-3 h-3 shrink-0 rounded bg-white/5 p-0.5 border border-white/5 group-hover:bg-white/10 transition-colors">
             {/* <Image src={icon} alt={feature} fill className="object-contain brightness-0 invert opacity-90" /> */}
             <Image
             src={icon}
             alt={feature}
              width={14}
              height={14}
             className="object-contain brightness-0 invert opacity-90"
             />

          </div>
          <span className="text-[10px] text-gray-400 group-hover:text-gray-200 transition-colors flex-1 font-normal leading-tight">
            {feature}
          </span>
        </div>
      );
    }

    // Fallback for features without icons
    if (isSubFeature) {
      return (
        <div className="flex items-center gap-1.5 ml-1 py-0.5">
          <div className="w-1 h-1 rounded-full bg-white/20 shrink-0" />
          <span className="text-[10px] text-gray-500 group-hover:text-gray-400 transition-colors flex-1 font-normal leading-tight">
            {feature}
          </span>
        </div>
      );
    }

    return (
      <div className="flex items-start gap-1.5 py-0.5 mt-1.5 first:mt-0">
         <div className="mt-0.5 p-0.5 rounded bg-white/5 border border-white/10 shrink-0 group-hover:bg-white/10 transition-colors">
            <Check className="w-2 h-2 text-gray-400 group-hover:text-gray-300 transition-colors" />
         </div>
        <span className="text-[10px] text-gray-300 group-hover:text-gray-100 transition-colors flex-1 font-medium leading-tight">
           {feature}
        </span>
      </div>
    );
  };

  // Fixed plan data to match the design exactly
  const fixedPlans = [
    {
      name: "Student",
      price: 299,
      // tokens: 600000,
      bestFor: "Perfect for trying AI Models",
      icon: <Star className="h-5 w-5 text-white" />,
      badge: "Unlimited Chat",
      features: [
        // "Access to Top AI Chat Models",
        "• ChatGPT",
        "• Gemini",
        "• DeepSeek",
        "• Grok",
        // "• Claude",
        "• Llama",
        "• Perplexity",
        "• Qwen",
        "• Mistral",
        "Image Generation Models",
        // "• ImageX",
        // "• Flux",
        "• Flux Schnell",
        // "• Seedream 4",
        // "AI Study Tools",
        // "• Quiz Maker",
        // "• Study Mode",
        // "Image Editing Models",
        // "• Kontext Pro",
        // "Unlimited chat & attachments with all advanced AI models (after Pro Tokens are finished)",
        // "* Fair usage policy applies"
      ]
    },
    {
      name: "Pro",
      price: 699,
      tokens: 1500000,
      bestFor: "Perfect for chat, video & images",
      icon: <Zap className="h-5 w-5 text-white" />,
      isPopular: true,
      badge: "Unlimited Image",
      features: [
        // "Everything on the Creator Plan",
        "Everything on the Student",
        // "Premium AI Chat Model",
        // "• Claude",
        "Image Generation Models",
        
        // "• Nano Banana Pro",

        "• ImageX",
        "• Flux",
        "• Seedream",
        "• Nano Banana",
        // "• Kontext Pro",
        // "AI Detector",
        "Image Restore Model",
        "• Kontext Restore",
        "Video Generation Models",
        // "• Pixverse 4.5 & 5",
        // "• RunwayML",
        "• SeeDance",
        // "• KlingAI V2.1, V2.5 Turbo",
        "• Hailuo",
        "• Wan",
        // "• Sora V2",
        // "• Lightricks",
        "Text To Speech And Music",
        // "• UdioAI",
        "• ElevenLabs",
        "Tools",
        "• Humanizer",
        // "Unlimited chat & attachments with all advanced AI models (after Pro Tokens are finished)*",
        // "* Fair usage policy applies"
      ]
    },
    {
      name: "Creator",
      price: 1999,
      tokens: 4500000,
      bestFor: "For heavy AI creators",
      icon: <Crown className="h-5 w-5 text-white" />,
      badge: "VEO3",
      features: [
        "Everything on the Pro Plan",
        "Video Generation Model",
        // "• VEO 3.1 Fast",
        // "• Litetricks",
        "• PixVerse",
        // "• Hailou 2 Fast",
        "• RunwayML",
        "• SeeDance",
        "• KlingAI",
        "• Hailuo",
        "• Wan",
        "• Sora",
        // "• Sora Pro",
        "• Lightricks",
        // "• KlingAI All Models",
        // "• Sora V2 Pro",
        "• Veo3.1 Fast",
        // "Unlimited chat & attachments with advanced AI models (after Pro Tokens are finished)*",
        // "* Fair usage policy applies"
      ]
    },
    {
      name: "Legend of AI",
      price: 4999,
      tokens: 10000000,
      bestFor: "Ultimate AI powerhouse",
      icon: <Crown className="h-5 w-5 text-white" />,
      badge: "VEO3",
      features: [
        // "You Own All Available Models",
        "Video Generation Model",
        "• Veo3",
        "• Veo3.1",
        "You Own All Available Models",
        // "Unlimited chat & attachments with advanced AI models (after Pro Tokens are finished)*",
        // "* Fair usage policy applies"
      ]
    }
  ];

  return (
    <div className="mx-auto max-w-7xl px-4">
      {/* Plans Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 items-stretch">
        {fixedPlans.map((plan, index) => {
          const isPopular = plan.isPopular;
          const isCurrentPlan = currentPlan?.name === plan.name;

          return (
            <div key={index} className="relative group flex flex-col">
              {/* Current Plan Badge */}
              {isCurrentPlan && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20 w-full text-center">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1A1B2E] to-[#13141F] border-2 border-white/20 text-white px-5 py-1.5 rounded-full text-xs font-bold shadow-xl tracking-wide">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    CURRENT PLAN
                  </div>
                </div>
              )}

              {/* Popular Badge */}
              {isPopular && !isCurrentPlan && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 text-black px-3 py-0.5 rounded-full text-[10px] font-bold shadow-lg shadow-amber-500/40 tracking-wide border border-amber-300/60 flex items-center gap-1">
                    <Sparkles className="w-2.5 h-2.5" />
                    MOST POPULAR
                  </div>
                </div>
              )}

              {/* Card Container */}
              <div 
                className={`
                    h-full relative rounded-2xl p-[1px] transition-all duration-500
                    ${isPopular ? 'bg-gradient-to-b from-white/20 via-white/10 to-transparent' : 'bg-white/5'}
                    hover:bg-white/10 hover:shadow-[0_8px_30px_rgb(0,0,0,0.4)]
                `}
              >
                <div className="absolute inset-0 rounded-2xl bg-[#0F0F13] m-[1px]" />
                
                {/* Card Content */}
                <div className="relative h-full bg-[#0F0F13]/90 backdrop-blur-xl rounded-[15px] p-4 flex flex-col overflow-hidden border border-white/5 group-hover:border-white/10 transition-all duration-300">
                    
                    {/* Top Gradient Glow */}
                    <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white/5 to-transparent opacity-60 pointer-events-none" />

                    {/* Header */}
                    <div className="relative z-10 mb-3 h-[70px] flex flex-col justify-start">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-white/5 transition-all duration-300">
                                {plan.icon}
                            </div>
                            <div className="flex-1">
                                <h3 className="text-base font-bold text-white tracking-tight group-hover:text-gray-100 transition-colors leading-tight">
                                    {plan.name}
                                </h3>
                            </div>
                        </div>

                        <p className="text-[11px] text-gray-500 font-normal leading-snug">
                            {plan.bestFor}
                        </p>
                    </div>

                    {/* Pricing */}
                    <div className="relative z-10 mb-3 pb-3 border-b border-white/5 group-hover:border-white/10 transition-colors h-[75px] flex flex-col justify-center">
                        <div className="flex items-baseline gap-1 mb-2">
                            <span className="text-2xl font-bold text-white tracking-tight">
                                {currencySymbol}{plan.price.toLocaleString()}
                            </span>
                            <span className="text-xs text-gray-500 font-normal">/mo</span>
                        </div>
                        
                        {/* Token Badge or Unlimited Chat Badge */}
                        {plan.tokens > 0 ? (
                            <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-white/5 border border-white/10 group-hover:bg-white/10 group-hover:border-white/15 transition-all">
                                {/* <Image src="/assets/coin.svg" width={10} height={10} className="w-2.5 h-2.5 opacity-80" alt="coin" /> */}
                                <span className="text-[9px] font-semibold text-gray-300 uppercase tracking-wide">
                                    {plan.tokens.toLocaleString('en-IN')} Pro Tokens
                                </span>
                            </div>
                        ) : (
                            <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-white/5 border border-white/10 group-hover:bg-white/10 group-hover:border-white/15 transition-all">
                                {/* <Sparkles className="w-2.5 h-2.5 text-gray-300" /> */}
                                <span className="text-[9px] font-semibold text-gray-300 tracking-wide">
                                    Unlimited Chat With Memory
                                    {/* Unlimited chat with personal memory */}
                                </span>
                            </div>
                        )}
                    </div>

                    {/* Features List */}
                    <div className="relative z-10 flex-1 mb-4 min-h-[200px] max-h-[280px] flex flex-col">
                        <p className="text-[9px] font-semibold text-gray-500 uppercase tracking-widest mb-2 flex items-center gap-1 flex-shrink-0">
                            <Sparkles className="w-2 h-2 opacity-50" />
                            What&apos;s Included
                        </p>
                        <div className="space-y-0 overflow-y-auto pr-1 custom-scrollbar flex-1">
                            {plan.features.map((feature, i) => (
                            <div key={i}>
                                {typeof feature === 'string' && feature.startsWith('•') ? (
                                renderFeatureWithIcon(feature.substring(2).trim(), true)
                                ) : (
                                <div className={`${i > 0 ? 'mt-1.5' : ''}`}>
                                    {typeof feature === 'string' ? renderFeatureWithIcon(feature, false) : null}
                                </div>
                                )}
                            </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA Button */}
                    <button
                        onClick={() => window.location.href = 'https://ai.onebrain.app/login'}
                        disabled={isCurrentPlan}
                        className={`
                            relative z-10 w-full h-[38px] rounded-lg font-semibold text-xs uppercase tracking-wide transition-all duration-300 flex items-center justify-center flex-shrink-0
                            ${isCurrentPlan
                                ? "bg-[#1A1B2E] text-gray-400 border border-white/5 cursor-default"
                                : "bg-gradient-to-b from-[#1A1B2E] to-[#13141F] text-white border border-white/10 hover:from-[#232438] hover:to-[#1A1B2E] hover:border-white/20 hover:shadow-[0_4px_20px_-5px_rgba(255,255,255,0.15)] active:scale-[0.98]"
                            }
                        `}
                    >
                        {isCurrentPlan ? "Current Plan" : "Get Started →"}
                    </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* TopUp Plans Section */}
      {topUpPlans?.length > 0 && (
        <div className="mx-auto mt-24 max-w-5xl">
            <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Need More Power?</h3>
                <p className="text-gray-400">Add more tokens to your account instantly with our Top-Up plans.</p>
            </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topUpPlans.map((topUpPlan) => (
              <div
                key={topUpPlan._id}
                className="group bg-[#0F0F13] border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300"
              >
                <h3 className="text-lg font-medium text-white text-center mb-2">
                  {topUpPlan.name}
                </h3>
                
                <div className="flex items-center justify-center gap-2 mb-6">
                    <div className="px-3 py-1 rounded-full bg-white/5 border border-white/5 flex items-center gap-2">
                        <Image src="/assets/coin.svg" width={14} height={14} className="w-3.5 h-3.5 opacity-70" alt="coin" />
                        <span className="text-xs font-medium text-gray-300">
                            {topUpPlan.tokens.toLocaleString()}
                        </span>
                    </div>
                </div>

                <div className="text-center mb-6">
                  <span className="text-3xl font-bold text-white tracking-tight">
                    {currencySymbol}{topUpPlan.price.toLocaleString()}
                  </span>
                </div>

                <button
                  onClick={() => handleSelectPlan({ topUpId: topUpPlan._id })}
                  className="w-full py-3 px-4 rounded-xl font-medium text-sm bg-white/10 hover:bg-white/20 text-white border border-white/5 hover:border-white/10 transition-all duration-200"
                >
                  Top Up Now
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
