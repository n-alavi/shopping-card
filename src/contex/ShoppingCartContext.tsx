import { createContext, useState } from "react";

interface ShoppingCartProvider {
  children: React.ReactNode;
}
interface ShoppingCartContext {
  cartItems: [];
}

export const ShoppingCartContext = createContext<ShoppingCartContext>({
  cartItems: [],
});

export function ShoppingCartProvider({ children }: ShoppingCartProvider) {
  const [cartItems, setCartItems] = useState<[]>([]);

  return (
    <ShoppingCartContext.Provider value={{ cartItems }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
