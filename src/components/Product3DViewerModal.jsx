import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Cylinder, Box, Sphere, ContactShadows } from '@react-three/drei';
import { X, Star, ShoppingBag, RotateCw, CheckCircle2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

// 3D Procedural Packaging Model based on Category
function Product3DModel({ category, isSpinning }) {
  const meshRef = useRef();

  useFrame((_, delta) => {
    if (meshRef.current && isSpinning) {
      meshRef.current.rotation.y += delta * 0.8;
    }
  });

  if (category === 'Dog Food' || category === 'Cat Food') {
    // 3D Bag of Kibble / Food Pouch
    return (
      <Float speed={2} rotationIntensity={0.6} floatIntensity={1}>
        <group ref={meshRef}>
          {/* Main Pouch Body */}
          <mesh castShadow position={[0, 0, 0]}>
            <boxGeometry args={[1.4, 2.0, 0.7, 8, 8, 8]} />
            <meshStandardMaterial color="#E8927C" roughness={0.3} metalness={0.15} />
          </mesh>
          {/* Top Seal */}
          <mesh position={[0, 1.05, 0]}>
            <boxGeometry args={[1.45, 0.12, 0.15]} />
            <meshStandardMaterial color="#1B3329" roughness={0.4} />
          </mesh>
          {/* Front Label Plate */}
          <mesh position={[0, 0, 0.36]}>
            <planeGeometry args={[1.1, 1.4]} />
            <meshStandardMaterial color="#FAF6EE" roughness={0.2} />
          </mesh>
        </group>
      </Float>
    );
  } else if (category === 'Grooming Products') {
    // 3D Shampoo Bottle
    return (
      <Float speed={2} rotationIntensity={0.6} floatIntensity={1}>
        <group ref={meshRef}>
          {/* Bottle Body */}
          <mesh castShadow position={[0, -0.2, 0]}>
            <cylinderGeometry args={[0.6, 0.65, 1.8, 32]} />
            <meshStandardMaterial color="#E6F1E9" roughness={0.1} metalness={0.2} transparent opacity={0.9} />
          </mesh>
          {/* Neck */}
          <mesh position={[0, 0.85, 0]}>
            <cylinderGeometry args={[0.22, 0.3, 0.3, 24]} />
            <meshStandardMaterial color="#1B3329" roughness={0.3} />
          </mesh>
          {/* Pump Dispenser */}
          <mesh position={[0, 1.1, 0]}>
            <cylinderGeometry args={[0.18, 0.18, 0.25, 24]} />
            <meshStandardMaterial color="#E8927C" roughness={0.2} metalness={0.4} />
          </mesh>
          <mesh position={[0.2, 1.15, 0]}>
            <boxGeometry args={[0.4, 0.08, 0.12]} />
            <meshStandardMaterial color="#E8927C" />
          </mesh>
        </group>
      </Float>
    );
  } else if (category === 'Toys') {
    // 3D Cheerful Ball with Ridges
    return (
      <Float speed={3} rotationIntensity={1.2} floatIntensity={1.5}>
        <group ref={meshRef}>
          <mesh castShadow>
            <sphereGeometry args={[1.1, 32, 32]} />
            <meshStandardMaterial color="#F3C87A" roughness={0.4} metalness={0.1} />
          </mesh>
          <mesh rotation={[Math.PI / 4, 0, 0]}>
            <torusGeometry args={[1.12, 0.12, 16, 64]} />
            <meshStandardMaterial color="#E8927C" roughness={0.3} />
          </mesh>
        </group>
      </Float>
    );
  } else {
    // 3D Comfortable Donut Bed / Cushion
    return (
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <group ref={meshRef} rotation={[0.4, 0, 0]}>
          <mesh castShadow>
            <torusGeometry args={[1.1, 0.5, 24, 48]} />
            <meshStandardMaterial color="#1B3329" roughness={0.8} />
          </mesh>
          <mesh position={[0, -0.2, 0]}>
            <cylinderGeometry args={[0.9, 0.9, 0.3, 32]} />
            <meshStandardMaterial color="#FAF6EE" roughness={0.9} />
          </mesh>
        </group>
      </Float>
    );
  }
}

export default function Product3DViewerModal({ product, onClose }) {
  const { addToCart } = useCart();
  const [isSpinning, setIsSpinning] = React.useState(true);

  if (!product) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl w-full max-w-4xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col lg:flex-row max-h-[90vh] animate-scale"
      >
        {/* Left Side: 3D Interactive Canvas */}
        <div className="w-full lg:w-3/5 h-80 lg:h-auto bg-gradient-to-br from-[#FAF6EE] to-[#E8EFEA] relative flex items-center justify-center">
          {/* Top Bar with 3D Controls */}
          <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[10px] font-extrabold text-[#1B3329] shadow-sm flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#E8927C] animate-ping"></span>
              <span>Interactive 3D Preview</span>
            </span>
            <button
              onClick={() => setIsSpinning(!isSpinning)}
              className="p-1.5 rounded-full bg-white/90 text-gray-700 hover:text-[#E8927C] shadow-sm transition-colors text-xs font-bold flex items-center gap-1 px-2.5"
              title="Toggle Auto Spin"
            >
              <RotateCw className="w-3.5 h-3.5" />
              <span>{isSpinning ? 'Pause Spin' : 'Auto Spin'}</span>
            </button>
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 text-[11px] font-bold text-gray-500 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full pointer-events-none shadow-sm whitespace-nowrap">
            🖱️ Drag to rotate 360° • Pinch / Scroll to zoom
          </div>

          {/* Three.js Canvas */}
          <Canvas camera={{ position: [0, 0, 4.2], fov: 45 }} dpr={[1, 1.5]}>
            <ambientLight intensity={0.9} />
            <directionalLight position={[5, 8, 5]} intensity={1.5} color="#FFF8E7" />
            <directionalLight position={[-5, -2, -5]} intensity={0.6} color="#A7E8D0" />
            <pointLight position={[0, 3, 3]} intensity={0.8} color="#F3C87A" />

            <Product3DModel category={product.category} isSpinning={isSpinning} />

            <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={5} blur={2.5} far={4} color="#1B3329" />
            <OrbitControls enablePan={false} minDistance={2.5} maxDistance={6} />
          </Canvas>
        </div>

        {/* Right Side: Product Details & Add to Bag */}
        <div className="w-full lg:w-2/5 p-6 sm:p-8 flex flex-col justify-between space-y-6 overflow-y-auto">
          <div>
            {/* Header with Close */}
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-full bg-[#FDF0EC] text-[#E8927C] text-[10px] font-extrabold uppercase tracking-wider">
                {product.category}
              </span>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Title & Price */}
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#1B3329] font-display mb-2">
              {product.name}
            </h3>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl font-extrabold text-[#E8927C]">₹{product.price}</span>
              {product.originalPrice && (
                <span className="text-sm text-gray-400 line-through">₹{product.originalPrice}</span>
              )}
              <div className="flex items-center gap-1 text-xs font-bold text-gray-700 ml-auto bg-[#FAF6EE] px-2.5 py-1 rounded-lg border border-gray-200">
                <Star className="w-3.5 h-3.5 fill-[#F3C87A] text-[#F3C87A]" />
                <span>{product.rating}</span>
                <span className="text-gray-400 font-normal">({product.reviews})</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
              {product.description}
            </p>

            {/* Feature Checklist */}
            <div className="space-y-2 text-xs text-gray-700 pt-2 border-t border-gray-100">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Genuine Certified Formulation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Veterinarian & Stylist Approved</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Complimentary Express Delivery on Orders ₹999+</span>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-4 border-t border-gray-100">
            <button
              onClick={() => {
                addToCart(product);
                onClose();
              }}
              className="w-full py-4 rounded-full bg-[#E8927C] hover:bg-[#D97760] text-white font-extrabold text-xs sm:text-sm shadow-peach hover:shadow-elevated transition-all duration-200 flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Add to Bag (₹{product.price})</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
