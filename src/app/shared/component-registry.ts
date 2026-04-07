export interface ComponentDemo {
  readonly id: string;
  readonly name: string;
  readonly icon: string;
  readonly description: string;
}

export const COMPONENT_REGISTRY: readonly ComponentDemo[] = [
  { id: 'accordion', name: 'Accordion', icon: 'list-outline', description: 'Expandable content sections' },
  { id: 'action-sheet', name: 'Action Sheet', icon: 'menu-outline', description: 'Bottom action menu' },
  { id: 'alert', name: 'Alert', icon: 'alert-circle-outline', description: 'Dialog alert messages' },
  { id: 'badge', name: 'Badge', icon: 'pricetag-outline', description: 'Small status indicators' },
  { id: 'button', name: 'Button', icon: 'radio-button-on-outline', description: 'Clickable action elements' },
  { id: 'card', name: 'Card', icon: 'card-outline', description: 'Content containers with headers' },
  { id: 'checkbox', name: 'Checkbox', icon: 'checkbox-outline', description: 'Multi-select checkboxes' },
  { id: 'chip', name: 'Chip', icon: 'pricetags-outline', description: 'Compact action elements' },
  { id: 'input', name: 'Input', icon: 'create-outline', description: 'Text input fields' },
  { id: 'modal', name: 'Modal', icon: 'layers-outline', description: 'Overlay dialog panels' },
  { id: 'progress-bar', name: 'Progress Bar', icon: 'bar-chart-outline', description: 'Linear progress indicators' },
  { id: 'radio', name: 'Radio', icon: 'radio-button-on-outline', description: 'Single-select radio buttons' },
  { id: 'range', name: 'Range', icon: 'options-outline', description: 'Slider range controls' },
  { id: 'select', name: 'Select', icon: 'caret-down-circle-outline', description: 'Dropdown selection' },
  { id: 'spinner', name: 'Spinner', icon: 'sync-outline', description: 'Loading spinner indicators' },
  { id: 'toast', name: 'Toast', icon: 'notifications-outline', description: 'Brief notification messages' },
  { id: 'toggle', name: 'Toggle', icon: 'toggle-outline', description: 'On/off switch controls' },
];
