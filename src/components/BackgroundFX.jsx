export default function BackgroundFX() {
  return (
    <div
      aria-hidden
      className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/src/assets/bg-texture.png')" }}
    />
  );
}
