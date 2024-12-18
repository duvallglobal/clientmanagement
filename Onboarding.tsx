'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

export default function Onboarding() {
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 5

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, totalSteps))
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1))

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Onboarding Questionnaire</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-6">
          {currentStep === 1 && (
            <>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="goals">What are your primary goals for your art business and online presence?</Label>
                  <Textarea id="goals" placeholder="Describe your goals..." />
                </div>
                <div>
                  <Label htmlFor="audience">What is your target audience or ideal customer? (Demographics, preferences, etc.)</Label>
                  <Textarea id="audience" placeholder="Describe your target audience..." />
                </div>
                <div>
                  <Label htmlFor="branding">Do you have any specific branding guidelines?</Label>
                  <RadioGroup defaultValue="no">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="branding-yes" />
                      <Label htmlFor="branding-yes">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="branding-no" />
                      <Label htmlFor="branding-no">No</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </>
          )}

          {currentStep === 2 && (
            <>
              <div className="space-y-4">
                <div>
                  <Label>What platforms are you currently active on?</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {['Instagram', 'TikTok', 'Twitter', 'Facebook', 'OnlyFans', 'Other'].map((platform) => (
                      <div key={platform} className="flex items-center space-x-2">
                        <Checkbox id={`platform-${platform}`} />
                        <Label htmlFor={`platform-${platform}`}>{platform}</Label>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <Label htmlFor="preferred-platform">What's your preferred platform?</Label>
                  <Input id="preferred-platform" placeholder="Enter your preferred platform" />
                </div>
                <div>
                  <Label htmlFor="content-type">What type of content do you want to prioritize?</Label>
                  <Input id="content-type" placeholder="e.g., Photos, Videos, Artwork" />
                </div>
              </div>
            </>
          )}

          {currentStep === 3 && (
            <>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="posting-frequency">Do you have a content schedule or preferred posting frequency?</Label>
                  <Input id="posting-frequency" placeholder="e.g., Daily, 3 times a week" />
                </div>
                <div>
                  <Label htmlFor="themes">Are there any themes or subjects you want to focus on for your art and OnlyFans content?</Label>
                  <Textarea id="themes" placeholder="Describe your themes or subjects..." />
                </div>
                <div>
                  <Label>Do you have a backlog of content, or should we start creating from scratch?</Label>
                  <RadioGroup defaultValue="backlog">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="backlog" id="content-backlog" />
                      <Label htmlFor="content-backlog">I have a backlog</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="scratch" id="content-scratch" />
                      <Label htmlFor="content-scratch">Start from scratch</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </>
          )}

          {currentStep === 4 && (
            <>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="growth-expectations">What are your expectations for social media growth? (Follower increase, engagement rates, etc.)</Label>
                  <Textarea id="growth-expectations" placeholder="Describe your growth expectations..." />
                </div>
                <div>
                  <Label>Are you open to paid advertising or promotions on these platforms?</Label>
                  <RadioGroup defaultValue="yes">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="advertising-yes" />
                      <Label htmlFor="advertising-yes">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="advertising-no" />
                      <Label htmlFor="advertising-no">No</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div>
                  <Label htmlFor="tone">Do you have a preferred tone for social media interactions? (Professional, casual, humorous, etc.)</Label>
                  <Input id="tone" placeholder="Enter your preferred tone" />
                </div>
              </div>
            </>
          )}

          {currentStep === 5 && (
            <>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="onlyfans-content">What type of content do you want to share on OnlyFans? (Art-focused, exclusive behind-the-scenes, etc.)</Label>
                  <Textarea id="onlyfans-content" placeholder="Describe your OnlyFans content..." />
                </div>
                <div>
                  <Label htmlFor="pricing">Do you have specific pricing tiers or subscription plans in mind?</Label>
                  <Textarea id="pricing" placeholder="Describe your pricing plans..." />
                </div>
                <div>
                  <Label htmlFor="boundaries">What are your boundaries regarding content creation and interactions with subscribers?</Label>
                  <Textarea id="boundaries" placeholder="Describe your boundaries..." />
                </div>
                <div>
                  <Label>Do you need help with compliance or platform-specific guidelines?</Label>
                  <RadioGroup defaultValue="yes">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="compliance-yes" />
                      <Label htmlFor="compliance-yes">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="compliance-no" />
                      <Label htmlFor="compliance-no">No</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </>
          )}

          <div className="flex justify-between mt-6">
            {currentStep > 1 && (
              <Button type="button" variant="outline" onClick={prevStep}>
                Previous
              </Button>
            )}
            {currentStep < totalSteps ? (
              <Button type="button" onClick={nextStep}>
                Next
              </Button>
            ) : (
              <Button type="submit">Submit</Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

