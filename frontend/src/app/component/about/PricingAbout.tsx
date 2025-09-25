"use client";
import { Star, Zap, Crown, Sparkles, CheckCircle2 } from "lucide-react";
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
  klingWhite: '/assets/models/kling-white.svg',
  veo3: '/assets/models/veo3-black.png',
  veo3Black: '/assets/models/veo3-black.png',
  vGenWhite: '/assets/models/vGen-white.svg',
  seedanceWhite: 'https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/seedance-logo.png', // Using vGen icon for Seedance temporarily
  hailou: '/assets/models/hailuo-color.png',
  wanWhite: '/assets/models/wan-white.svg',
  voiceWhite: '/assets/models/voice-white.svg',
  udioWhite: '/assets/models/UdioAI White.svg',
  runwayWhite: '/assets/models/runway-white.png',
  humanizerWhite: '/assets/models/Humanizer White.svg',
  restorerWhite: '/assets/models/flux-w.svg',
  quizMakerWhite: '/assets/models/quiz-maker-white.svg',
  elevenlabsWhite: 'https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/Elevenlabs%20Logo%20(1).svg' 
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
      'kontext restore': 'kontextRestore'
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
      'imagex': 'imageXWhite',
      'flux': 'fluxWhite',
      'kling': 'klingWhite',
      'klingai': 'klingWhite',
      'veo3': 'veo3',
      'vgen': 'vGenWhite',
      'seedance': 'seedanceWhite',
      'hailou': 'hailou',
      'wan': 'wanWhite',
      'speechai': 'voiceWhite',
      'udio': 'udioWhite',
      'udioai': 'udioWhite',
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
      'elevenlabsWhite': 'elevenlabsWhite',
      'nano banana': 'veo3',

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
      return (
        <div className={`flex items-center gap-2 ${isSubFeature ? 'ml-4' : ''}`}>
          <Image src={icon} alt={feature} width={16} height={16} className="w-4 h-4 rounded-sm" />
          <span className="text-sm text-gray-300 flex-1">
            {feature}
          </span>
        </div>
      );
    }

    // Fallback for features without icons
    if (isSubFeature) {
      return (
        <div className="flex items-start gap-2">
          <span className="text-gray-400 mt-0.5 ml-5">•</span>
          <span className="text-sm text-gray-400 flex-1">
            {feature}
          </span>
        </div>
      );
    }

    return (
      <span className="text-sm text-gray-300 flex-1 my-2">
        ✅ {feature}
      </span>
    );
  };

  // Fixed plan data to match the design exactly
  const fixedPlans = [
    {
      name: "Student",
      price: 299,
      tokens: 600000,
      bestFor: "Perfect for trying AI tools",
      icon: <Star className="h-4 w-4 text-green-400" />,
      badge: "Unlimited Chat",
      features: [
        "AI Image Editing & Generations models",
        "• ImageX",
        "• Flux",
        "• Kontext Pro",
        "• Quiz Maker",
        "AI Detector",
        "Unlimited chat & attachments with advanced AI models (after Pro Tokens are finished)"
      ]
    },
    {
      name: "Creator",
      price: 699,
      tokens: 1500000,
      bestFor: "Great for regular AI users",
      icon: <Zap className="h-4 w-4 text-blue-400" />,
      isPopular: true,
      badge: "Unlimited Image",
      features: [
        "Everything on the Student Plan",
        "AI Image Repair Model",
        "• Kontext Restore",
        "• Nano Banana",
        "AI Video Generation",
        "• Vgen",
        "• Seedance",
        "• Hailou 2 Fast",
        "• Wan 2.2",
        "• RunwayML",
        "• KlingAI V2.1",
        "AI Text to Speech & Music",
        "• UdioAI",
        "• Elevenlabs",
        "Unlimited chat & attachments with advanced AI models (after Pro Tokens are finished)"
      ]
    },
    {
      name: "Peformance",
      price: 1999,
      tokens: 4500000,
      bestFor: "For heavy AI creators",
      icon: <Crown className="h-4 w-4 text-purple-400" />,
      badge: "KlingAI",
      features: [
        "Everything on the Creator Plan",
        "AI Video Generation",
        "• KlingAI All Models",
        "Unlimited chat & attachments with advanced AI models (after Pro Tokens are finished)"
      ]
    },
    {
      name: "Legend of AI",
      price: 4999,
      tokens: 1000000,
      bestFor: "Ultimate AI powerhouse",
      icon: <Crown className="h-4 w-4 text-yellow-400" />,
      badge: "VEO3",
      features: [
        "You Own All Available Models",
        "AI Video Generation",
        "• VEO3",
        "Unlimited chat & attachments with advanced AI models (after Pro Tokens are finished)"
      ]
    }
  ];

  return (
    <div className="mx-auto max-w-7xl px-4">
      {/* Plans Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9">
        {fixedPlans.map((plan, index) => {
          const isPopular = plan.isPopular;
          const isCurrentPlan = currentPlan?.name === plan.name;

          return (
            <div key={index} className="relative">
              {/* Current Plan Badge */}
              {isCurrentPlan && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3" />

                    Your Active Plan
                  </div>
                </div>
              )}

              {/* Popular Badge */}
              {isPopular && !isCurrentPlan && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gray-900 border-2 border-blue-800 text-white px-3 py-1 rounded-full text-xs font-bold">
                    ⭐ Most Popular
                  </div>
                </div>
              )}

              {/* Special Badges */}
              {plan.badge && !isCurrentPlan && (
                <div className="absolute md:-top-2 -top-8 -right-4 md:-right-10 z-10">
                  <div className="flex items-center justify-center gap-2 relative">

                    <Image src="https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/priceClipTag" width={112} height={96} className="md:w-28 w-24 h-24 md:h-24" alt="coin" />
                    <span className={`text-white text-[8px] md:text-[10px] font-normal absolute md:top-[43px] top-[43px] left-[50px] md:left-[50%] -translate-x-1/2 -translate-y-1/2 ${plan.badge === "Unlimited Chat" || plan.badge === "Unlimited Image" ? "pl-1 md:pl-2" : ""}`}>
                      {plan.badge}
                    </span>
                  </div>
                </div>
              )}

              {/* Main Card */}
              <div className="bg-gradient-to-b from-black to-[#0E1747] border-2 border-sky-600 rounded-3xl p-6 h-full backdrop-blur-sm hover:border-gray-500/50 transition-all duration-300 relative overflow-hidden">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 via-transparent to-gray-900/20 pointer-events-none"></div>

                <div className="relative z-10">
                  {/* Header */}
                  <div className="text-center mb-6">
                    <div className="w-12 h-12 mx-auto mb-3 bg-gray-700/50 rounded-lg flex items-center justify-center">
                      {plan.icon}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-1">
                      <span className={`${plan.name === "Basic" ? "text-sky-600" :
                        plan.name === "Creator" ? "text-yellow-600" :
                          plan.name === "Pro Creator" ? "text-red-600" :
                            plan.name === "Legend of AI" ? "text-orange-600" :
                              "text-white"
                        }`}>
                        {plan.name}
                      </span>

                    </h3>
                    <p className="text-sm text-gray-400">
                      {plan.bestFor}
                    </p>
                  </div>

                  {/* Token Info */}
                  <div className="  rounded-3xl p-4 mb-6 border border-white/50">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <Image src="/assets/coin.svg" width={16} height={16} className="w-4 h-4" alt="coin" />
                      <span className="text-white font-semibold">
                        {plan.tokens.toLocaleString('en-IN')} Pro Tokens
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 text-center">
                      Use with any AI model below
                    </p>
                  </div>

                  {/* Pricing */}
                  <div className="text-center mb-6">
                    <span className="text-4xl font-medium bg-gradient-to-r from-white to-white/50 bg-clip-text text-transparent">
                      {currencySymbol}{plan.price.toLocaleString()}
                    </span>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => window.location.href = 'https://ai.onebrain.app/login'}
                    disabled={isCurrentPlan}
                    className={`w-full py-2 px-4 rounded-3xl font-semibold text-sm transition-all duration-200 mb-6 ${isCurrentPlan
                      ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white cursor-default"
                      : " bg-[#0E1747] border-2 border-sky-600 text-white transform hover:scale-[1.02]"
                      }`}
                  >
                    {isCurrentPlan ? (
                      <span className="flex items-center justify-center gap-2">
                        <CheckCircle2 className="h-4 w-4" />
                        Current Active Plan
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        🚀 Get Started
                      </span>
                    )}
                  </button>

                  {/* Features */}
                  <div className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <div key={i}>
                        {feature.startsWith('•') ? (
                          renderFeatureWithIcon(feature.substring(2).trim(), true)
                        ) : (
                          <div className="my-2">
                            {renderFeatureWithIcon(feature, false)}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* TopUp Plans Section */}
      {topUpPlans?.length > 0 && (
        <div className="mx-auto mt-16">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="p-2 rounded-lg bg-purple-600/20 border border-purple-500/30">
                <Sparkles className="h-5 w-5 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Top-Up Plans</h3>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topUpPlans.map((topUpPlan) => (
              <div
                key={topUpPlan._id}
                className="bg-gray-900/40 border border-gray-600/30 rounded-xl p-6 backdrop-blur-sm hover:border-gray-500/50 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white text-center mb-2">
                  {topUpPlan.name}
                </h3>
                <p className="text-sm text-gray-400 text-center mb-4">
                  {topUpPlan.bestFor || "Boost your tokens"}
                </p>
                <div className="bg-gray-800/40 rounded-lg p-3 mb-4 border border-gray-600/20">
                  <div className="flex items-center justify-center gap-2">
                    <Image src="/assets/coin.svg" width={16} height={16} className="w-4 h-4" alt="coin" />
                    <span className="text-white font-semibold">
                      {topUpPlan.tokens.toLocaleString()} Tokens
                    </span>
                  </div>
                </div>
                <div className="text-center mb-4">
                  <span className="text-3xl font-bold text-white">
                    {currencySymbol}{topUpPlan.price.toLocaleString()}
                  </span>
                </div>
                <button
                  onClick={() => handleSelectPlan({ topUpId: topUpPlan._id })}
                  className="w-full py-3 px-4 rounded-lg font-semibold text-sm bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white transition-all duration-200 transform hover:scale-[1.02]"
                >
                  🚀 Get Started
                </button>
                {topUpPlan.features && (
                  <div className="space-y-2 mt-4">
                    {topUpPlan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="mt-0.5">
                          <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-sm text-gray-300 flex-1">{feature}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
