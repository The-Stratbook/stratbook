import React from 'react';
import Layout from '../../../components/templates/Layout';
import { Button, Card, Loading, Section, Heading, Text, Caption, Badge } from '../../../components/common';
import ImageWithFallback from '../../../components/atoms/ImageWithFallback';

const ComponentDemo = () => {
  return (
    <Layout seoProps={{
      title: 'Component Demo | The Stratbook',
      description: 'A showcase of reusable components for The Stratbook',
    }}>
      {/* Typography Section */}
      <Section 
        title="Typography Components" 
        subtitle="Standardized text elements for consistent styling"
        background="light"
      >
        <div className="space-y-6">
          <div>
            <Heading level={1}>Heading Level 1</Heading>
            <Heading level={2}>Heading Level 2</Heading>
            <Heading level={3}>Heading Level 3</Heading>
            <Heading level={4}>Heading Level 4</Heading>
            <Heading level={5}>Heading Level 5</Heading>
            <Heading level={6}>Heading Level 6</Heading>
          </div>

          <div className="space-y-4">
            <Text size="2xl" weight="bold">Text Component (2XL Bold)</Text>
            <Text size="xl">Text Component (XL)</Text>
            <Text>Default Text Component</Text>
            <Text size="sm">Small Text Component</Text>
            <Text size="xs">Extra Small Text Component</Text>
          </div>

          <div className="space-y-2">
            <Text>Text colors:</Text>
            <div className="flex flex-wrap gap-4">
              <Text color="primary">Primary Text</Text>
              <Text color="secondary">Secondary Text</Text>
              <Text color="accent">Accent Text</Text>
              <Text color="muted">Muted Text</Text>
            </div>
          </div>

          <div>
            <Caption>This is a caption component for smaller descriptive text</Caption>
          </div>

          <div className="space-y-2">
            <Text>Badge components:</Text>
            <div className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="primary">Primary</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="accent">Accent</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge size="lg" variant="primary">Large</Badge>
              <Badge size="sm" variant="secondary">Small</Badge>
            </div>
          </div>
        </div>
      </Section>

      {/* Button Section */}
      <Section 
        title="Button Components" 
        subtitle="Standardized buttons for actions"
      >
        <div className="space-y-6">
          <div>
            <Text className="mb-2">Button Variants:</Text>
            <div className="flex flex-wrap gap-2">
              <Button>Default</Button>
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="accent">Accent</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
              <Button variant="outline">Outline</Button>
            </div>
          </div>

          <div>
            <Text className="mb-2">Button Sizes:</Text>
            <div className="flex flex-wrap gap-2 items-center">
              <Button size="lg" variant="primary">Large</Button>
              <Button size="md" variant="primary">Medium</Button>
              <Button size="sm" variant="primary">Small</Button>
              <Button size="xs" variant="primary">XSmall</Button>
            </div>
          </div>

          <div>
            <Text className="mb-2">Button States:</Text>
            <div className="flex flex-wrap gap-2">
              <Button variant="primary" disabled>Disabled</Button>
              <Button variant="primary" isLoading>Loading</Button>
            </div>
          </div>

          <div>
            <Text className="mb-2">Button with Icons:</Text>
            <div className="flex flex-wrap gap-2">
              <Button leftIcon={<span className="text-xl">👍</span>}>Left Icon</Button>
              <Button rightIcon={<span className="text-xl">🚀</span>}>Right Icon</Button>
              <Button 
                leftIcon={<span className="text-xl">🔍</span>} 
                rightIcon={<span className="text-xl">➡️</span>}
              >
                Both Icons
              </Button>
            </div>
          </div>

          <div>
            <Text className="mb-2">Link Buttons:</Text>
            <div className="flex flex-wrap gap-2">
              <Button to="/">Internal Link</Button>
              <Button href="https://github.com" external variant="secondary">External Link</Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Card Section */}
      <Section 
        title="Card Components" 
        subtitle="Flexible card layouts for various content"
        background="light"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            title="Basic Card"
            subtitle="A simple card with content"
          >
            <Text>This is the content of the card.</Text>
          </Card>

          <Card
            title="Card with Image"
            subtitle="Images can be positioned at the top"
            image="/images/general/logo.png"
            imageAlt="Logo"
          >
            <Text>Cards can display images at the top.</Text>
          </Card>

          <Card
            title="Card with Footer"
            footer={<Button variant="primary" size="sm">Action Button</Button>}
          >
            <Text>This card has a footer with an action button.</Text>
          </Card>

          <Card
            title="Card with Badge"
            badge={<Badge variant="secondary">Featured</Badge>}
          >
            <Text>This card has a badge in the top right corner.</Text>
          </Card>

          <Card
            title="Side Image Card"
            subtitle="Images can be positioned at the side"
            image="/images/general/logo.png"
            imageAlt="Logo"
            imagePosition="side"
          >
            <Text>This card has an image positioned at the side.</Text>
          </Card>

          <Card
            title="Link Card"
            to="/"
          >
            <Text>This entire card is clickable and links to the home page.</Text>
          </Card>
        </div>
      </Section>

      {/* Loading Section */}
      <Section 
        title="Loading Components" 
        subtitle="Loading indicators for async operations"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card bg-base-100 p-6 flex items-center justify-center h-48">
            <Loading type="spinner" size="lg" />
          </div>

          <div className="card bg-base-100 p-6 flex items-center justify-center h-48">
            <Loading type="dots" size="lg" color="secondary" />
          </div>

          <div className="card bg-base-100 p-6 flex items-center justify-center h-48">
            <Loading type="ring" size="lg" color="accent" text="Loading content..." />
          </div>
        </div>
      </Section>

      {/* Image with Fallback Section */}
      <Section 
        title="ImageWithFallback Component" 
        subtitle="Images with fallback handling and loading states"
        background="light"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card bg-base-100 p-6">
            <Text className="mb-4">Standard Image:</Text>
            <ImageWithFallback
              src="/images/general/logo.png"
              fallbackSrc="/images/tips/default.jpg"
              alt="Logo"
              className="w-full h-40 object-contain"
            />
          </div>

          <div className="card bg-base-100 p-6">
            <Text className="mb-4">Image with Aspect Ratio:</Text>
            <ImageWithFallback
              src="/images/general/logo.png"
              fallbackSrc="/images/tips/default.jpg"
              alt="Logo"
              aspectRatio="16/9"
            />
          </div>

          <div className="card bg-base-100 p-6">
            <Text className="mb-4">Invalid Image with Fallback:</Text>
            <ImageWithFallback
              src="/path/to/invalid-image.jpg"
              fallbackSrc="/images/tips/default.jpg"
              alt="Invalid Image Example"
              aspectRatio="1/1"
            />
          </div>
        </div>
      </Section>

      {/* Combined Usage Example */}
      <Section 
        title="Combined Component Example" 
        subtitle="A real-world example using multiple components together"
        background="gradient"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <Heading level={3} color="primary">Creating Powerful Strategies</Heading>
            <Text className="mt-4">
              Learn how to combine operator abilities, map knowledge, and team coordination
              to create devastating strategies that will surprise your opponents.
            </Text>
            
            <div className="mt-6">
              <ImageWithFallback
                src="/images/maps/Bank.jpg"
                fallbackSrc="/images/tips/default.jpg"
                alt="Bank Map"
                aspectRatio="16/9"
                className="rounded-lg"
              />
              <Caption className="mt-2">Map: Bank - One of the most strategic maps in the game</Caption>
            </div>

            <div className="flex gap-2 mt-6">
              <Badge variant="primary">Strategy</Badge>
              <Badge variant="secondary">Teamwork</Badge>
              <Badge variant="outline">Advanced</Badge>
            </div>
            
            <div className="mt-6 flex justify-end">
              <Button variant="primary" rightIcon={<span>→</span>}>
                Learn More
              </Button>
            </div>
          </Card>

          <Card>
            <div className="flex justify-between items-start mb-4">
              <Heading level={3} color="secondary">Weekly Featured Tips</Heading>
              <Badge variant="accent" size="lg">New</Badge>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4 items-center p-3 bg-base-200 rounded-lg">
                <ImageWithFallback
                  src="/images/operators/Ace.png"
                  fallbackSrc="/images/tips/default.jpg"
                  alt="Ace Operator"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <Text weight="semibold">Vertical Play with Ace</Text>
                  <Text size="sm" color="muted">Using hard breach charges for unexpected angles</Text>
                </div>
              </div>

              <div className="flex gap-4 items-center p-3 bg-base-200 rounded-lg">
                <ImageWithFallback
                  src="/images/operators/Alibi.png"
                  fallbackSrc="/images/tips/default.jpg"
                  alt="Alibi Operator"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <Text weight="semibold">Advanced Prisma Placements</Text>
                  <Text size="sm" color="muted">Creative ways to use Alibi's holograms</Text>
                </div>
              </div>

              <div className="flex gap-4 items-center p-3 bg-base-200 rounded-lg">
                <ImageWithFallback
                  src="/images/maps/Clubhouse.jpg"
                  fallbackSrc="/images/tips/default.jpg"
                  alt="Clubhouse Map"
                  className="w-16 h-16 rounded object-cover"
                />
                <div>
                  <Text weight="semibold">Clubhouse Basement Defense</Text>
                  <Text size="sm" color="muted">The ultimate setup for Church/Arsenal</Text>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex justify-end">
              <Button variant="outline" leftIcon={<span>📌</span>}>
                View All Tips
              </Button>
            </div>
          </Card>
        </div>
      </Section>
    </Layout>
  );
};

export default ComponentDemo;