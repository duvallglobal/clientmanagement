import { Button } from "@/components/ui/button"

interface NavbarProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function Navbar({ activeSection, setActiveSection }: NavbarProps) {
  const sections = ['Dashboard', 'Content', 'Marketing', 'Tools', 'Resources']

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold text-blue-800">SocialMediaDash</div>
          <div className="flex space-x-4">
            {sections.map((section) => (
              <Button
                key={section}
                variant={activeSection === section ? "default" : "ghost"}
                onClick={() => setActiveSection(section)}
              >
                {section}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

