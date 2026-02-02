interface EmptyStateProps {
  message: string;
}

export function EmptyState({ message }: EmptyStateProps) {
  return (
    <div className="text-center py-12 text-gray-500">
      <p className="text-lg">{message}</p>
    </div>
  );
}
