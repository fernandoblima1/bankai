import { useMemo } from "react";
import { create } from "zustand";
import loading from "./ui/loading";

type LoadingStore = {
  isLoading: boolean;
  loadingText: string;
  setIsLoading: (payload: boolean) => void;
  setLoadingText: (payload: string) => void;
  showLoading: (payload?: string) => void;
  hideLoading: () => void;
};

const useLoadingStore = create<LoadingStore>((set, get) => ({
  isLoading: false,
  loadingText: "",
  setIsLoading: (isLoading) => set({ isLoading }),
  setLoadingText: (loadingText) => set({ loadingText }),
  showLoading: (payload) =>
    set({ isLoading: true, ...(payload && { loadingText: payload }) }),
  hideLoading: () => set({ isLoading: false }),
}));

export const useLoading = () => {
  const showLoading = useLoadingStore((state) => state.showLoading);
  const hideLoading = useLoadingStore((state) => state.hideLoading);
  const setIsLoading = useLoadingStore((state) => state.setIsLoading);

  const result = useMemo(
    () => ({
      show: (message: string = "") => showLoading(message),
      hide: () => hideLoading(),
      set: (isLoading: boolean) => setIsLoading(isLoading),
    }),
    [hideLoading, setIsLoading, showLoading]
  );

  return result;
};

export default function Loading() {
  const isLoading = useLoadingStore((state) => state.isLoading);
  const loadingText = useLoadingStore((state) => state.loadingText);

  return isLoading && loading(loadingText);
}
