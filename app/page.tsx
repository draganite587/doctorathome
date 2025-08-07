import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  MessageCircle,
  Clock,
  Shield,
  Users,
  Heart,
  CheckCircle,
  Star,
  MapPin,
  Stethoscope,
  UserCheck,
  Calendar,
  Award,
  Verified,
  Baby,
  Activity,
  Briefcase,
  ChevronDown,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function DrVisitHomeCare() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-green-500">
              <Stethoscope className="h-6 w-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold text-gray-900">DrVisit</span>
              <span className="text-sm text-green-600 block leading-none">HomeCare</span>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="hidden md:flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>1800-123-4567</span>
            </Button>
            <Button size="sm" className="bg-green-600 hover:bg-green-700 rounded-full px-6">
              Book Now rami reddy
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge className="w-fit bg-green-100 text-green-800 hover:bg-green-100 rounded-full px-4 py-1">
                  🏥 MBBS-Certified Doctors • Available 24/7
                </Badge>
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight">
                  <span className="text-blue-600">MBBS-Certified Doctors</span> Delivered to Your Doorstep in{" "}
                  <span className="text-green-600">Under 60 Minutes</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 max-w-[600px] leading-relaxed">
                  Non-emergency care for seniors, children, and families. Trusted, safe, and professional medical care
                  in the comfort of your home across Delhi, Mumbai, Bangalore & more.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6 bg-green-600 hover:bg-green-700 rounded-full shadow-lg">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book a Doctor Now
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6 border-green-600 text-green-600 hover:bg-green-50 rounded-full bg-transparent"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Us
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>1000+ home visits completed</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Shield className="h-4 w-4 text-blue-500" />
                  <span>100% verified doctors</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Clock className="h-4 w-4 text-orange-500" />
                  <span>60-min response time</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=600&width=800&text=Indian+doctor+visiting+family+at+home"
                  alt="MBBS doctor visiting Indian family at home"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Floating trust badges */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg p-4 border">
                <div className="flex items-center space-x-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-green-400 border-2 border-white"
                      ></div>
                    ))}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">50+ Doctors</div>
                    <div className="text-xs text-gray-500">Available Now</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges & Social Proof */}
      <section className="py-8 bg-white border-b">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-6">
            <p className="text-sm text-gray-500 mb-4">Trusted by families across India</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="flex items-center space-x-2">
              <Award className="h-6 w-6 text-blue-600" />
              <span className="text-sm font-medium">MCI Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-green-600" />
              <span className="text-sm font-medium">ISO 27001</span>
            </div>
            <div className="flex items-center space-x-2">
              <Verified className="h-6 w-6 text-blue-600" />
              <span className="text-sm font-medium">NABH Standards</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="h-6 w-6 text-yellow-500" />
              <span className="text-sm font-medium">4.8/5 Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gray-900 mb-6">
              Tired of Long Hospital Waits or Risky Travel with <span className="text-red-600">Sick Family?</span>
            </h2>

            <div className="grid gap-6 md:grid-cols-3 mt-12">
              <Card className="border-0 shadow-lg rounded-2xl bg-white hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                    <Clock className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">No More Long Queues</h3>
                  <p className="text-gray-600">Skip 3-4 hour hospital waits. Get immediate care at home.</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg rounded-2xl bg-white hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
                    <Shield className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Avoid Hospital Infections</h3>
                  <p className="text-gray-600">Protect your family from hospital-acquired infections and germs.</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg rounded-2xl bg-white hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                    <Heart className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Comfort & Care at Home</h3>
                  <p className="text-gray-600">Familiar environment helps faster recovery, especially for elderly.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gray-900 mb-6">
              The Care You Deserve, <span className="text-blue-600">at Home</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our qualified MBBS doctors arrive at your home for complete physical exams, accurate diagnoses,
              prescriptions, and follow-up care - just like a hospital visit, but better.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            <Card className="border-0 shadow-lg rounded-2xl hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 mb-4 bg-blue-100 rounded-xl flex items-center justify-center">
                  <UserCheck className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Complete Physical Examination</h3>
                <p className="text-gray-600">Thorough check-up with medical equipment brought to your home.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 mb-4 bg-green-100 rounded-xl flex items-center justify-center">
                  <Activity className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Instant Prescriptions</h3>
                <p className="text-gray-600">Digital prescriptions sent immediately. Medicine delivery available.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 mb-4 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Follow-up Care</h3>
                <p className="text-gray-600">Scheduled follow-ups and 24/7 support for ongoing health needs.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gray-900 mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">Get professional medical care in just 3 simple steps</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Phone className="h-4 w-4 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Book Online</h3>
              <p className="text-gray-600">Call, WhatsApp, or book online. Tell us your symptoms and preferred time.</p>
            </div>

            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Doctor Arrives</h3>
              <p className="text-gray-600">
                MBBS-certified doctor reaches your location within 60 minutes with medical equipment.
              </p>
            </div>

            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Heart className="h-4 w-4 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Receive Care</h3>
              <p className="text-gray-600">
                Complete examination, diagnosis, prescription, and follow-up plan - all at home.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 rounded-full px-8 py-6 text-lg shadow-lg">
              <Calendar className="mr-2 h-5 w-5" />
              Book Your Home Visit Now
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gray-900 mb-6">
              Why Choose <span className="text-green-600">DrVisit HomeCare?</span>
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            <Card className="border-0 shadow-lg rounded-2xl text-center hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <Verified className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Only MBBS Doctors</h3>
                <p className="text-gray-600 text-sm">
                  100% qualified and verified medical professionals with years of experience.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl text-center hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Major Cities Coverage</h3>
                <p className="text-gray-600 text-sm">
                  Available in Delhi, Mumbai, Bangalore, Hyderabad, Chennai & more.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl text-center hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                  <Clock className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">60-Min Response</h3>
                <p className="text-gray-600 text-sm">
                  Fast response time with 24/7 availability for urgent care needs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl text-center hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
                  <Shield className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Safe & Secure</h3>
                <p className="text-gray-600 text-sm">
                  Background-verified doctors with insurance coverage and safety protocols.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gray-900 mb-6">
              Perfect for Your <span className="text-blue-600">Family's Health Needs</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            <Card className="border-0 shadow-lg rounded-2xl hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Elderly Parents</h3>
                <p className="text-gray-600 text-sm">
                  Comfortable care for seniors who find hospital visits challenging.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <Baby className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Kids & Infants</h3>
                <p className="text-gray-600 text-sm">Pediatric care in familiar surroundings for better comfort.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                  <Activity className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Post-Surgery Patients</h3>
                <p className="text-gray-600 text-sm">Follow-up care and monitoring without travel stress.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
                  <Briefcase className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Working Professionals</h3>
                <p className="text-gray-600 text-sm">Convenient healthcare without taking time off work.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gray-900 mb-6">
              What Families Are Saying
            </h2>
            <p className="text-xl text-gray-600">Real experiences from real families across India</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            <Card className="border-0 shadow-lg rounded-2xl">
              <CardContent className="p-6">
                <div className="flex space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Dr. Sharma arrived exactly on time for my mother's check-up. She was so comfortable at home, and the
                  doctor was very patient and thorough. Highly recommended!"
                </p>
                <div className="flex items-center space-x-3">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Priya Gupta"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold text-sm">Priya Gupta</h4>
                    <p className="text-xs text-gray-500">Delhi • Booked for elderly mother</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl">
              <CardContent className="p-6">
                <div className="flex space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "My 2-year-old had fever at night. The pediatrician came within 45 minutes and diagnosed the issue
                  immediately. Such a relief for worried parents!"
                </p>
                <div className="flex items-center space-x-3">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Rajesh Kumar"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold text-sm">Rajesh Kumar</h4>
                    <p className="text-xs text-gray-500">Mumbai • Pediatric care</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl">
              <CardContent className="p-6">
                <div className="flex space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Post-surgery follow-up was seamless. The doctor brought all necessary equipment and gave detailed
                  care instructions. Professional service!"
                </p>
                <div className="flex items-center space-x-3">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Anita Reddy"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold text-sm">Anita Reddy</h4>
                    <p className="text-xs text-gray-500">Bangalore • Post-surgery care</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              <Card className="border-0 shadow-lg rounded-2xl">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-lg">Can I book a doctor visit for my parents?</h3>
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  </div>
                  <p className="text-gray-600 mt-3">
                    Yes! Many of our bookings are made by children for their elderly parents. You can book on their
                    behalf and be present during the consultation if needed.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg rounded-2xl">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-lg">What if my case is urgent or an emergency?</h3>
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  </div>
                  <p className="text-gray-600 mt-3">
                    For life-threatening emergencies, please call 108 immediately. DrVisit HomeCare is for non-emergency
                    medical care. For urgent but non-emergency cases, we prioritize and can reach within 30-45 minutes.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg rounded-2xl">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-lg">What's the typical response time?</h3>
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  </div>
                  <p className="text-gray-600 mt-3">
                    Our standard response time is under 60 minutes. For urgent cases, we can reach within 30-45 minutes.
                    You can also schedule appointments for a preferred time slot.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg rounded-2xl">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-lg">How are your doctors verified?</h3>
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  </div>
                  <p className="text-gray-600 mt-3">
                    All our doctors are MBBS-qualified with valid MCI registration. We verify their credentials, conduct
                    background checks, and ensure they have relevant experience in home healthcare.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container px-4 md:px-6 text-center">
          <div className="space-y-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Your Family Deserves the Best Medical Care — At Home
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Don't wait for health issues to worsen. Get professional MBBS-certified medical care delivered to your
              doorstep in under 60 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6 bg-white text-blue-600 hover:bg-gray-100 rounded-full shadow-lg"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Doctor Visit Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-blue-600 bg-transparent rounded-full"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp for Urgent Cases
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-blue-100">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4" />
                <span>Available 24/7</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4" />
                <span>60-minute response</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4" />
                <span>MBBS-certified doctors</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-green-500">
                  <Stethoscope className="h-6 w-6 text-white" />
                </div>
                <div>
                  <span className="text-xl font-bold">DrVisit</span>
                  <span className="text-sm text-green-400 block leading-none">HomeCare</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Professional medical care delivered to your home by MBBS-certified doctors across India.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Youtube className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Quick Contact</h4>
              <div className="space-y-3">
                <Button variant="ghost" className="justify-start p-0 h-auto text-gray-400 hover:text-white">
                  <Phone className="h-4 w-4 mr-2" />
                  1800-123-4567
                </Button>
                <Button variant="ghost" className="justify-start p-0 h-auto text-gray-400 hover:text-white">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp: +91-98765-43210
                </Button>
                <Button variant="ghost" className="justify-start p-0 h-auto text-gray-400 hover:text-white">
                  <Mail className="h-4 w-4 mr-2" />
                  care@drvisithomecare.com
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Services</h4>
              <div className="space-y-2">
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                  Home Doctor Visits
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                  Elderly Care
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                  Pediatric Care
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                  Post-Surgery Care
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Cities We Serve</h4>
              <div className="space-y-2">
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                  Delhi NCR
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                  Mumbai
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                  Bangalore
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                  Hyderabad
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 DrVisit HomeCare. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms & Conditions
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button size="lg" className="rounded-full w-14 h-14 bg-green-500 hover:bg-green-600 shadow-2xl animate-pulse">
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    </div>
  )
}
