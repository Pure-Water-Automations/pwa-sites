/* @ds-bundle: {"format":4,"namespace":"PureWaterAutomationsDesignSystem_9423d9","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Stat","sourcePath":"components/data/Stat.jsx"},{"name":"Table","sourcePath":"components/data/Table.jsx"},{"name":"Modal","sourcePath":"components/feedback/Modal.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"62f8b306c735","components/core/Button.jsx":"2a4c5c9413be","components/core/Card.jsx":"ed48693bb15d","components/core/Tag.jsx":"3f6584c2a946","components/data/Stat.jsx":"6d7055dd89bb","components/data/Table.jsx":"359aabeb8e41","components/feedback/Modal.jsx":"f2bc23c6bf42","components/feedback/Toast.jsx":"4c6db0c076b4","components/forms/Checkbox.jsx":"efe728a10546","components/forms/Input.jsx":"c4769fdf4344","components/forms/Radio.jsx":"02af8cf19b87","components/forms/Select.jsx":"31c34fbdcf3e","components/forms/Switch.jsx":"c208e4cb22b5","components/navigation/Tabs.jsx":"8001469fea39","ui_kits/dashboard/shared.js":"fdc5ac69588d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PureWaterAutomationsDesignSystem_9423d9 = window.PureWaterAutomationsDesignSystem_9423d9 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
/**
 * Badge — Status chip / pill label.
 * Semantic color variants for system states (online, warning, error, etc.).
 */
function Badge({
  variant = 'default',
  size = 'md',
  dot = false,
  pulse = false,
  children,
  style,
  ...rest
}) {
  const variants = {
    default: {
      background: 'var(--color-neutral-100)',
      color: 'var(--color-neutral-700)',
      border: '1px solid var(--color-neutral-200)'
    },
    primary: {
      background: 'var(--color-navy-50)',
      color: 'var(--color-navy-800)',
      border: '1px solid var(--color-navy-100)'
    },
    sky: {
      background: 'var(--color-sky-50)',
      color: 'var(--color-sky-700)',
      border: '1px solid var(--color-sky-100)'
    },
    success: {
      background: 'var(--color-success-light)',
      color: 'var(--color-success-dark)',
      border: '1px solid rgba(48,201,122,0.22)'
    },
    warning: {
      background: 'var(--color-warning-light)',
      color: 'var(--color-warning-dark)',
      border: '1px solid rgba(255,179,64,0.28)'
    },
    danger: {
      background: 'var(--color-error-light)',
      color: 'var(--color-error-dark)',
      border: '1px solid rgba(240,76,76,0.22)'
    },
    info: {
      background: 'var(--color-info-light)',
      color: 'var(--color-info-dark)',
      border: '1px solid rgba(77,196,232,0.25)'
    },
    solid: {
      background: 'var(--color-navy-900)',
      color: '#ffffff',
      border: 'none'
    },
    'solid-sky': {
      background: 'var(--color-sky-400)',
      color: '#ffffff',
      border: 'none'
    },
    outline: {
      background: 'transparent',
      color: 'var(--color-navy-800)',
      border: '1.5px solid var(--color-navy-200)'
    }
  };
  const sizes = {
    sm: {
      fontSize: 'var(--text-xs)',
      padding: '0 var(--space-2)',
      height: '18px',
      gap: 'var(--space-1)'
    },
    md: {
      fontSize: 'var(--text-sm)',
      padding: '0 var(--space-2-5)',
      height: '22px',
      gap: 'var(--space-1-5)'
    },
    lg: {
      fontSize: 'var(--text-base)',
      padding: '0 var(--space-3)',
      height: '28px',
      gap: 'var(--space-2)'
    }
  };
  const dotColors = {
    success: 'var(--color-success)',
    danger: 'var(--color-error)',
    warning: 'var(--color-warning)',
    sky: 'var(--color-sky-500)',
    info: 'var(--color-sky-500)',
    primary: 'var(--color-navy-700)',
    solid: 'rgba(255,255,255,0.8)',
    'solid-sky': 'rgba(255,255,255,0.8)',
    default: 'var(--color-neutral-400)',
    outline: 'var(--color-navy-400)'
  };
  const dotSize = size === 'sm' ? 5 : size === 'lg' ? 8 : 6;
  return React.createElement(React.Fragment, null, React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-badge)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-medium)',
      letterSpacing: '0.01em',
      whiteSpace: 'nowrap',
      lineHeight: 1,
      ...sizes[size],
      ...variants[variant],
      ...style
    },
    ...rest
  }, dot && React.createElement('span', {
    style: {
      width: dotSize,
      height: dotSize,
      flexShrink: 0,
      borderRadius: '50%',
      background: dotColors[variant] || 'var(--color-neutral-400)',
      display: 'inline-block',
      animation: pulse ? 'pwa-pulse-glow 1.8s ease-in-out infinite' : 'none'
    }
  }), children), pulse && React.createElement('style', null, '@keyframes pwa-pulse-glow { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.6;transform:scale(1.2)} }'));
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
/**
 * Button — Primary interactive control. Pill-shaped, Apple-inspired.
 * Supports primary (navy gradient), secondary (sky), ghost, outline, danger, and text variants.
 */
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  fullWidth = false,
  icon,
  iconRight,
  onClick,
  type = 'button',
  href,
  children,
  style,
  ...rest
}) {
  const sizes = {
    xs: {
      height: '28px',
      padding: '0 var(--space-3)',
      fontSize: 'var(--text-xs)',
      gap: 'var(--space-1)'
    },
    sm: {
      height: '34px',
      padding: '0 var(--space-4)',
      fontSize: 'var(--text-sm)',
      gap: 'var(--space-1-5)'
    },
    md: {
      height: '42px',
      padding: '0 var(--space-5)',
      fontSize: 'var(--text-base)',
      gap: 'var(--space-2)'
    },
    lg: {
      height: '52px',
      padding: '0 var(--space-7)',
      fontSize: 'var(--text-md)',
      gap: 'var(--space-2-5)'
    },
    xl: {
      height: '62px',
      padding: '0 var(--space-10)',
      fontSize: 'var(--text-lg)',
      gap: 'var(--space-3)'
    }
  };
  const variants = {
    primary: {
      background: 'linear-gradient(180deg, var(--color-navy-800) 0%, var(--color-navy-900) 100%)',
      color: '#ffffff',
      border: '1px solid rgba(255,255,255,0.08)',
      boxShadow: 'var(--shadow-navy-sm)'
    },
    secondary: {
      background: 'linear-gradient(180deg, var(--color-sky-400) 0%, var(--color-sky-500) 100%)',
      color: '#ffffff',
      border: '1px solid rgba(255,255,255,0.15)',
      boxShadow: 'var(--shadow-sky-sm)'
    },
    ghost: {
      background: 'rgba(255,255,255,0)',
      color: 'var(--color-navy-900)',
      border: '1px solid var(--color-border)',
      boxShadow: 'var(--shadow-xs)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--color-navy-900)',
      border: '1.5px solid var(--color-navy-900)',
      boxShadow: 'none'
    },
    'outline-sky': {
      background: 'transparent',
      color: 'var(--color-sky-600)',
      border: '1.5px solid var(--color-sky-400)',
      boxShadow: 'none'
    },
    danger: {
      background: 'linear-gradient(180deg, #f26060 0%, var(--color-error) 100%)',
      color: '#ffffff',
      border: 'none',
      boxShadow: '0 4px 12px rgba(240,76,76,0.25), 0 2px 6px rgba(240,76,76,0.15)'
    },
    text: {
      background: 'transparent',
      color: 'var(--color-navy-800)',
      border: 'none',
      boxShadow: 'none'
    }
  };
  const hoverShadow = {
    primary: 'var(--shadow-navy-md)',
    secondary: 'var(--shadow-sky-md)',
    ghost: 'var(--shadow-sm)',
    outline: 'var(--shadow-xs)',
    'outline-sky': 'var(--shadow-xs)',
    danger: '0 8px 20px rgba(240,76,76,0.35)',
    text: 'none'
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 'var(--radius-button)',
    fontFamily: 'var(--font-sans)',
    fontWeight: 'var(--weight-medium)',
    letterSpacing: '-0.01em',
    cursor: disabled || loading ? 'not-allowed' : 'pointer',
    outline: 'none',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    userSelect: 'none',
    transition: 'transform var(--duration-base) var(--ease-spring), box-shadow var(--duration-base) var(--ease-out), opacity var(--duration-fast) var(--ease-out)',
    width: fullWidth ? '100%' : undefined,
    opacity: disabled ? 0.45 : 1,
    WebkitTapHighlightColor: 'transparent',
    flexShrink: 0,
    ...sizes[size],
    ...variants[variant],
    ...style
  };
  function onEnter(e) {
    if (disabled || loading) return;
    e.currentTarget.style.transform = 'translateY(-1px) scale(1.015)';
    e.currentTarget.style.boxShadow = hoverShadow[variant] || '';
  }
  function onLeave(e) {
    e.currentTarget.style.transform = '';
    e.currentTarget.style.boxShadow = variants[variant]?.boxShadow || '';
  }
  function onDown(e) {
    if (disabled || loading) return;
    e.currentTarget.style.transform = 'translateY(0) scale(0.97)';
  }
  function onUp(e) {
    if (disabled || loading) return;
    e.currentTarget.style.transform = 'translateY(-1px) scale(1.015)';
  }
  const spinSize = {
    xs: 11,
    sm: 13,
    md: 15,
    lg: 18,
    xl: 20
  }[size];
  const inner = React.createElement(React.Fragment, null, loading ? React.createElement('svg', {
    width: spinSize,
    height: spinSize,
    viewBox: '0 0 24 24',
    fill: 'none',
    style: {
      animation: 'pwa-spin 0.7s linear infinite',
      flexShrink: 0
    }
  }, React.createElement('circle', {
    cx: 12,
    cy: 12,
    r: 9,
    stroke: 'currentColor',
    strokeWidth: 2.5,
    strokeOpacity: 0.25
  }), React.createElement('path', {
    d: 'M12 3a9 9 0 0 1 9 9',
    stroke: 'currentColor',
    strokeWidth: 2.5,
    strokeLinecap: 'round'
  })) : icon ? React.createElement('span', {
    style: {
      display: 'flex',
      alignItems: 'center',
      lineHeight: 1,
      flexShrink: 0
    }
  }, icon) : null, children, !loading && iconRight ? React.createElement('span', {
    style: {
      display: 'flex',
      alignItems: 'center',
      lineHeight: 1,
      flexShrink: 0
    }
  }, iconRight) : null);
  if (href) {
    return React.createElement('a', {
      href,
      style: base,
      onMouseEnter: onEnter,
      onMouseLeave: onLeave,
      onMouseDown: onDown,
      onMouseUp: onUp,
      ...rest
    }, inner);
  }
  return React.createElement('button', {
    type,
    disabled: disabled || loading,
    onClick,
    style: base,
    onMouseEnter: onEnter,
    onMouseLeave: onLeave,
    onMouseDown: onDown,
    onMouseUp: onUp,
    ...rest
  }, inner);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
/**
 * Card — Content container with elevation variants.
 * Apple-inspired: rounded, minimal borders, soft shadows.
 */
function Card({
  variant = 'default',
  padding = 'md',
  radius = 'card',
  hoverable = false,
  onClick,
  children,
  style,
  ...rest
}) {
  const paddings = {
    none: '0',
    xs: 'var(--space-3)',
    sm: 'var(--space-4)',
    md: 'var(--space-6)',
    lg: 'var(--space-8)',
    xl: 'var(--space-10)'
  };
  const radii = {
    sm: 'var(--radius-lg)',
    md: 'var(--radius-xl)',
    card: 'var(--radius-card)',
    lg: 'var(--radius-3xl)'
  };
  const variants = {
    default: {
      background: 'var(--color-surface)',
      border: '1px solid var(--color-border)',
      boxShadow: 'var(--shadow-sm)'
    },
    elevated: {
      background: 'var(--color-surface)',
      border: 'none',
      boxShadow: 'var(--shadow-lg)'
    },
    glass: {
      background: 'var(--color-glass-bg)',
      backdropFilter: 'blur(20px) saturate(180%)',
      WebkitBackdropFilter: 'blur(20px) saturate(180%)',
      border: '1px solid var(--color-glass-border)',
      boxShadow: 'var(--shadow-md)'
    },
    navy: {
      background: 'linear-gradient(145deg, var(--color-navy-800) 0%, var(--color-navy-900) 100%)',
      border: '1px solid rgba(255,255,255,0.1)',
      boxShadow: 'var(--shadow-navy-lg)',
      color: '#ffffff'
    },
    sky: {
      background: 'linear-gradient(145deg, var(--color-sky-400) 0%, var(--color-sky-500) 100%)',
      border: '1px solid rgba(255,255,255,0.2)',
      boxShadow: 'var(--shadow-sky-md)',
      color: '#ffffff'
    },
    flat: {
      background: 'var(--color-bg-secondary)',
      border: 'none',
      boxShadow: 'none'
    },
    outline: {
      background: 'transparent',
      border: '1.5px solid var(--color-border)',
      boxShadow: 'none'
    }
  };
  const hoverShadows = {
    default: 'var(--shadow-md)',
    elevated: 'var(--shadow-xl)',
    glass: 'var(--shadow-lg)',
    navy: 'var(--shadow-navy-xl)',
    sky: 'var(--shadow-sky-lg)',
    flat: 'var(--shadow-sm)',
    outline: 'var(--shadow-md)'
  };
  const isInteractive = !!(onClick || hoverable);
  const base = {
    borderRadius: radii[radius] || radius,
    padding: paddings[padding],
    transition: 'transform var(--duration-base) var(--ease-spring), box-shadow var(--duration-base) var(--ease-out)',
    cursor: isInteractive ? 'pointer' : 'default',
    ...variants[variant],
    ...style
  };
  function onEnter(e) {
    if (!isInteractive) return;
    e.currentTarget.style.transform = 'translateY(-2px)';
    e.currentTarget.style.boxShadow = hoverShadows[variant] || '';
  }
  function onLeave(e) {
    if (!isInteractive) return;
    e.currentTarget.style.transform = '';
    e.currentTarget.style.boxShadow = variants[variant]?.boxShadow || '';
  }
  return React.createElement('div', {
    onClick,
    onMouseEnter: onEnter,
    onMouseLeave: onLeave,
    style: base,
    ...rest
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
/**
 * Tag — Category / filter label. Optionally removable.
 * Rectangular with subtle rounding, unlike the pill Badge.
 */
function Tag({
  variant = 'default',
  size = 'md',
  removable = false,
  onRemove,
  children,
  style,
  ...rest
}) {
  const variants = {
    default: {
      background: 'var(--color-neutral-100)',
      color: 'var(--color-neutral-700)',
      border: '1px solid var(--color-neutral-200)'
    },
    primary: {
      background: 'var(--color-navy-50)',
      color: 'var(--color-navy-800)',
      border: '1px solid var(--color-navy-100)'
    },
    sky: {
      background: 'var(--color-sky-50)',
      color: 'var(--color-sky-700)',
      border: '1px solid var(--color-sky-100)'
    },
    success: {
      background: 'var(--color-success-light)',
      color: 'var(--color-success-dark)',
      border: '1px solid rgba(48,201,122,0.2)'
    },
    warning: {
      background: 'var(--color-warning-light)',
      color: 'var(--color-warning-dark)',
      border: '1px solid rgba(255,179,64,0.25)'
    },
    danger: {
      background: 'var(--color-error-light)',
      color: 'var(--color-error-dark)',
      border: '1px solid rgba(240,76,76,0.2)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--color-navy-800)',
      border: '1px solid var(--color-navy-200)'
    },
    solid: {
      background: 'var(--color-navy-900)',
      color: '#ffffff',
      border: 'none'
    }
  };
  const sizes = {
    sm: {
      fontSize: 'var(--text-xs)',
      padding: '0.25rem 0.5rem',
      gap: 'var(--space-1)',
      borderRadius: 'var(--radius-xs)'
    },
    md: {
      fontSize: 'var(--text-sm)',
      padding: '0.3rem 0.75rem',
      gap: 'var(--space-1-5)',
      borderRadius: 'var(--radius-sm)'
    },
    lg: {
      fontSize: 'var(--text-base)',
      padding: '0.4375rem 1rem',
      gap: 'var(--space-2)',
      borderRadius: 'var(--radius-md)'
    }
  };
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-medium)',
      whiteSpace: 'nowrap',
      lineHeight: 1,
      ...sizes[size],
      ...variants[variant],
      ...style
    },
    ...rest
  }, children, removable && React.createElement('button', {
    onClick: e => {
      e.stopPropagation();
      onRemove && onRemove();
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      color: 'inherit',
      opacity: 0.55,
      borderRadius: '50%',
      width: '14px',
      height: '14px',
      flexShrink: 0,
      transition: 'opacity var(--duration-fast) var(--ease-out)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.opacity = '1';
    },
    onMouseLeave: e => {
      e.currentTarget.style.opacity = '0.55';
    },
    'aria-label': 'Remove'
  }, React.createElement('svg', {
    width: 9,
    height: 9,
    viewBox: '0 0 10 10',
    fill: 'none'
  }, React.createElement('path', {
    d: 'M1 1L9 9M9 1L1 9',
    stroke: 'currentColor',
    strokeWidth: 1.75,
    strokeLinecap: 'round'
  }))));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/data/Stat.jsx
try { (() => {
/**
 * Stat — KPI metric card with value, label, trend indicator, and optional icon.
 * Core building block for PWA monitoring dashboards.
 */
function Stat({
  label,
  value,
  unit,
  change,
  changeLabel,
  trend = 'neutral',
  icon,
  variant = 'default',
  style,
  ...rest
}) {
  const trendColors = {
    up: 'var(--color-success)',
    down: 'var(--color-error)',
    neutral: 'var(--color-text-secondary)'
  };
  const trendBgs = {
    up: 'var(--color-success-light)',
    down: 'var(--color-error-light)',
    neutral: 'var(--color-neutral-100)'
  };
  const isNavy = variant === 'navy';
  const isSky = variant === 'sky';
  const isDark = isNavy || isSky;
  const containerStyle = {
    borderRadius: 'var(--radius-2xl)',
    padding: 'var(--space-6)',
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-3)',
    ...(isNavy ? {
      background: 'linear-gradient(145deg, var(--color-navy-800) 0%, var(--color-navy-900) 100%)',
      border: '1px solid rgba(255,255,255,0.1)',
      boxShadow: 'var(--shadow-navy-md)'
    } : isSky ? {
      background: 'linear-gradient(145deg, var(--color-sky-400) 0%, var(--color-sky-500) 100%)',
      border: '1px solid rgba(255,255,255,0.2)',
      boxShadow: 'var(--shadow-sky-md)'
    } : {
      background: 'var(--color-surface)',
      border: '1px solid var(--color-border)',
      boxShadow: 'var(--shadow-sm)'
    }),
    ...style
  };
  const trendArrow = trend === 'up' ? React.createElement('svg', {
    width: 10,
    height: 10,
    viewBox: '0 0 10 10',
    fill: 'none'
  }, React.createElement('path', {
    d: 'M5 8L2 4.5h6L5 8Z',
    fill: 'currentColor',
    transform: 'rotate(180 5 5)'
  })) : trend === 'down' ? React.createElement('svg', {
    width: 10,
    height: 10,
    viewBox: '0 0 10 10',
    fill: 'none'
  }, React.createElement('path', {
    d: 'M5 2L8 5.5H2L5 2Z',
    fill: 'currentColor',
    transform: 'rotate(180 5 5)'
  })) : null;
  return React.createElement('div', {
    style: containerStyle,
    ...rest
  }, /* Header row */
  React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, React.createElement('span', {
    style: {
      fontSize: 'var(--text-sm)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-medium)',
      letterSpacing: '0.01em',
      color: isDark ? 'rgba(255,255,255,0.7)' : 'var(--color-text-secondary)'
    }
  }, label), icon && React.createElement('span', {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '36px',
      height: '36px',
      borderRadius: 'var(--radius-md)',
      background: isDark ? 'rgba(255,255,255,0.14)' : 'var(--color-sky-50)',
      color: isDark ? 'rgba(255,255,255,0.9)' : 'var(--color-sky-500)',
      flexShrink: 0
    }
  }, icon)), /* Value row */
  React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-1-5)'
    }
  }, React.createElement('span', {
    style: {
      fontSize: 'var(--text-4xl)',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-tight)',
      lineHeight: 1,
      color: isDark ? '#ffffff' : 'var(--color-text-primary)'
    }
  }, value), unit && React.createElement('span', {
    style: {
      fontSize: 'var(--text-lg)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-medium)',
      color: isDark ? 'rgba(255,255,255,0.55)' : 'var(--color-text-secondary)'
    }
  }, unit)), /* Trend row */
  (change !== undefined || changeLabel) && React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)'
    }
  }, change !== undefined && React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '3px',
      background: isDark ? 'rgba(255,255,255,0.15)' : trendBgs[trend],
      color: isDark ? 'rgba(255,255,255,0.9)' : trendColors[trend],
      padding: '2px 8px',
      borderRadius: 'var(--radius-full)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-semibold)',
      fontFamily: 'var(--font-sans)'
    }
  }, trendArrow, change), changeLabel && React.createElement('span', {
    style: {
      fontSize: 'var(--text-xs)',
      fontFamily: 'var(--font-sans)',
      color: isDark ? 'rgba(255,255,255,0.45)' : 'var(--color-text-tertiary)'
    }
  }, changeLabel)));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Stat.jsx", error: String((e && e.message) || e) }); }

// components/data/Table.jsx
try { (() => {
/**
 * Table — Data table. Rounded card chrome, sticky-feel header, hover rows.
 */
function Table({
  columns = [],
  data = [],
  dense = false,
  striped = false,
  onRowClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(-1);
  const cellPad = dense ? 'var(--space-2) var(--space-4)' : 'var(--space-3) var(--space-4)';
  return React.createElement('div', {
    style: {
      border: '1px solid var(--color-border-subtle)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      background: 'var(--color-surface)',
      boxShadow: 'var(--shadow-xs)',
      fontFamily: 'var(--font-sans)',
      ...style
    },
    ...rest
  }, React.createElement('table', {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontSize: 'var(--text-sm)'
    }
  }, React.createElement('thead', null, React.createElement('tr', {
    style: {
      background: 'var(--color-bg-secondary)'
    }
  }, columns.map(c => React.createElement('th', {
    key: c.key,
    style: {
      padding: cellPad,
      textAlign: c.align || 'left',
      width: c.width,
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--color-text-secondary)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wide)',
      borderBottom: '1px solid var(--color-border-subtle)',
      whiteSpace: 'nowrap'
    }
  }, c.label)))), React.createElement('tbody', null, data.map((row, i) => React.createElement('tr', {
    key: i,
    onClick: onRowClick ? () => onRowClick(row, i) : undefined,
    onMouseEnter: () => setHover(i),
    onMouseLeave: () => setHover(-1),
    style: {
      background: hover === i ? 'var(--color-sky-50)' : striped && i % 2 === 1 ? 'var(--color-bg-secondary)' : 'transparent',
      cursor: onRowClick ? 'pointer' : 'default',
      transition: 'background var(--duration-fast) var(--ease-out)'
    }
  }, columns.map(c => React.createElement('td', {
    key: c.key,
    style: {
      padding: cellPad,
      textAlign: c.align || 'left',
      color: 'var(--color-text-primary)',
      lineHeight: 'var(--leading-normal)',
      borderBottom: i < data.length - 1 ? '1px solid var(--color-border-subtle)' : 'none'
    }
  }, c.render ? c.render(row[c.key], row, i) : row[c.key])))))));
}
Object.assign(__ds_scope, { Table });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Table.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Modal.jsx
try { (() => {
/**
 * Modal — Centered dialog on a navy-tinted overlay. Glass-adjacent card chrome.
 */
function Modal({
  open = false,
  onClose,
  title,
  subtitle,
  children,
  footer,
  width = 480,
  hideClose = false,
  style,
  ...rest
}) {
  if (!open) return null;
  return React.createElement('div', {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--color-overlay)',
      backdropFilter: 'blur(4px)',
      WebkitBackdropFilter: 'blur(4px)',
      padding: 'var(--space-6)'
    },
    onClick: e => {
      if (e.target === e.currentTarget && onClose) onClose();
    }
  }, React.createElement('div', {
    role: 'dialog',
    'aria-modal': true,
    style: {
      width: '100%',
      maxWidth: typeof width === 'number' ? width + 'px' : width,
      maxHeight: '85vh',
      display: 'flex',
      flexDirection: 'column',
      boxSizing: 'border-box',
      background: 'var(--color-surface)',
      borderRadius: 'var(--radius-modal)',
      boxShadow: 'var(--shadow-2xl)',
      border: '1px solid var(--color-border-subtle)',
      overflow: 'hidden',
      fontFamily: 'var(--font-sans)',
      ...style
    },
    ...rest
  }, (title || !hideClose) && React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 'var(--space-4)',
      padding: 'var(--space-6) var(--space-6) 0'
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-1)'
    }
  }, title && React.createElement('h2', {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-xl)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--color-text-primary)',
      letterSpacing: '-0.02em',
      lineHeight: 1.2
    }
  }, title), subtitle && React.createElement('p', {
    style: {
      margin: 0,
      fontSize: 'var(--text-sm)',
      color: 'var(--color-text-secondary)',
      lineHeight: 'var(--leading-normal)'
    }
  }, subtitle)), !hideClose && React.createElement('button', {
    onClick: onClose,
    'aria-label': 'Close',
    style: {
      width: '30px',
      height: '30px',
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--color-bg-secondary)',
      border: 'none',
      borderRadius: '50%',
      cursor: 'pointer',
      color: 'var(--color-text-secondary)',
      transition: 'background var(--duration-fast) var(--ease-out)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = 'var(--color-bg-tertiary)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = 'var(--color-bg-secondary)';
    }
  }, React.createElement('svg', {
    width: 14,
    height: 14,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2.5,
    strokeLinecap: 'round'
  }, React.createElement('path', {
    d: 'M18 6 6 18M6 6l12 12'
  })))), React.createElement('div', {
    style: {
      padding: 'var(--space-5) var(--space-6)',
      overflowY: 'auto',
      fontSize: 'var(--text-base)',
      color: 'var(--color-text-primary)',
      lineHeight: 'var(--leading-normal)'
    }
  }, children), footer && React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 'var(--space-3)',
      padding: '0 var(--space-6) var(--space-6)'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Modal.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
/**
 * Toast — Inline notification card. Render in a fixed stack for app toasts.
 */
function Toast({
  variant = 'info',
  title,
  message,
  onDismiss,
  action,
  style,
  ...rest
}) {
  const variants = {
    info: {
      accent: 'var(--color-info)',
      bg: 'var(--color-info-light)',
      fg: 'var(--color-info-dark)',
      icon: 'M12 16v-4M12 8h.01'
    },
    success: {
      accent: 'var(--color-success)',
      bg: 'var(--color-success-light)',
      fg: 'var(--color-success-dark)',
      icon: 'm9 12 2 2 4-5'
    },
    warning: {
      accent: 'var(--color-warning)',
      bg: 'var(--color-warning-light)',
      fg: 'var(--color-warning-dark)',
      icon: 'M12 9v4M12 17h.01'
    },
    error: {
      accent: 'var(--color-error)',
      bg: 'var(--color-error-light)',
      fg: 'var(--color-error-dark)',
      icon: 'M15 9l-6 6M9 9l6 6'
    }
  };
  const v = variants[variant] || variants.info;
  return React.createElement('div', {
    role: 'status',
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-3)',
      padding: 'var(--space-4)',
      boxSizing: 'border-box',
      background: 'var(--color-surface)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      border: '1px solid var(--color-border-subtle)',
      fontFamily: 'var(--font-sans)',
      minWidth: '280px',
      maxWidth: '420px',
      ...style
    },
    ...rest
  }, React.createElement('div', {
    style: {
      width: '28px',
      height: '28px',
      flexShrink: 0,
      borderRadius: '50%',
      background: v.bg,
      color: v.fg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, React.createElement('svg', {
    width: 15,
    height: 15,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2.5,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  }, React.createElement('circle', {
    cx: 12,
    cy: 12,
    r: 9,
    strokeWidth: 2
  }), React.createElement('path', {
    d: v.icon
  }))), React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2px',
      flex: 1,
      minWidth: 0
    }
  }, title && React.createElement('span', {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--color-text-primary)',
      lineHeight: 1.3,
      letterSpacing: '-0.01em'
    }
  }, title), message && React.createElement('span', {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--color-text-secondary)',
      lineHeight: 'var(--leading-normal)'
    }
  }, message), action && React.createElement('div', {
    style: {
      marginTop: 'var(--space-2)'
    }
  }, action)), onDismiss && React.createElement('button', {
    onClick: onDismiss,
    'aria-label': 'Dismiss',
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '2px',
      color: 'var(--color-text-tertiary)',
      display: 'flex',
      flexShrink: 0
    }
  }, React.createElement('svg', {
    width: 13,
    height: 13,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2.5,
    strokeLinecap: 'round'
  }, React.createElement('path', {
    d: 'M18 6 6 18M6 6l12 12'
  }))));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
/**
 * Checkbox — Custom checkbox with animated check, label + hint.
 */
function Checkbox({
  checked = false,
  onChange,
  disabled = false,
  label,
  hint,
  size = 'md',
  style,
  ...rest
}) {
  const dims = {
    sm: 16,
    md: 20,
    lg: 24
  };
  const d = dims[size];
  const boxStyle = {
    width: d + 'px',
    height: d + 'px',
    flexShrink: 0,
    boxSizing: 'border-box',
    borderRadius: size === 'sm' ? '5px' : '6px',
    border: '1.5px solid ' + (checked ? 'var(--color-sky-500)' : 'var(--color-border-strong)'),
    background: checked ? 'linear-gradient(135deg, var(--color-sky-400), var(--color-sky-500))' : 'var(--color-surface)',
    boxShadow: checked ? 'var(--shadow-sky-sm)' : 'var(--shadow-xs)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background var(--duration-fast) var(--ease-out), border-color var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    outline: 'none'
  };
  const labelFontSize = size === 'sm' ? 'var(--text-sm)' : size === 'lg' ? 'var(--text-md)' : 'var(--text-base)';
  const handleClick = () => {
    if (!disabled) onChange && onChange(!checked);
  };
  const handleKey = e => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      handleClick();
    }
  };
  return React.createElement('div', {
    style: {
      display: 'inline-flex',
      alignItems: hint ? 'flex-start' : 'center',
      gap: 'var(--space-2-5)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      userSelect: 'none',
      ...style
    },
    onClick: handleClick,
    ...rest
  }, React.createElement('div', {
    style: boxStyle,
    role: 'checkbox',
    'aria-checked': checked,
    tabIndex: disabled ? -1 : 0,
    onKeyDown: handleKey
  }, React.createElement('svg', {
    width: d - 8,
    height: d - 8,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: '#fff',
    strokeWidth: 3.5,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    style: {
      opacity: checked ? 1 : 0,
      transform: checked ? 'scale(1)' : 'scale(0.5)',
      transition: 'opacity var(--duration-fast) var(--ease-out), transform var(--duration-base) var(--ease-spring)'
    }
  }, React.createElement('path', {
    d: 'M4 12.5 9.5 18 20 6'
  }))), (label || hint) && React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2px'
    }
  }, label && React.createElement('span', {
    style: {
      fontSize: labelFontSize,
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--color-text-primary)',
      lineHeight: 1.3
    }
  }, label), hint && React.createElement('span', {
    style: {
      fontSize: 'var(--text-xs)',
      fontFamily: 'var(--font-sans)',
      color: 'var(--color-text-secondary)',
      lineHeight: 1.3
    }
  }, hint)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
/**
 * Input — Text field with label, hint, error, and icon support.
 */
function Input({
  label,
  hint,
  error,
  size = 'md',
  disabled = false,
  icon,
  iconRight,
  type = 'text',
  placeholder,
  value,
  onChange,
  style,
  containerStyle,
  id,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const sizes = {
    sm: {
      height: '34px',
      fontSize: 'var(--text-sm)',
      paddingH: 'var(--space-3)',
      iconOffset: '9px',
      iconSize: 14
    },
    md: {
      height: '42px',
      fontSize: 'var(--text-base)',
      paddingH: 'var(--space-4)',
      iconOffset: '12px',
      iconSize: 16
    },
    lg: {
      height: '52px',
      fontSize: 'var(--text-md)',
      paddingH: 'var(--space-5)',
      iconOffset: '15px',
      iconSize: 20
    }
  };
  const s = sizes[size];
  const iconPaddingLeft = icon ? size === 'sm' ? '32px' : size === 'lg' ? '46px' : '38px' : s.paddingH;
  const iconPaddingRight = iconRight ? size === 'sm' ? '32px' : size === 'lg' ? '46px' : '38px' : s.paddingH;
  const inputStyle = {
    width: '100%',
    boxSizing: 'border-box',
    height: s.height,
    fontFamily: 'var(--font-sans)',
    fontSize: s.fontSize,
    color: 'var(--color-text-primary)',
    background: disabled ? 'var(--color-bg-secondary)' : 'var(--color-surface)',
    border: '1.5px solid ' + (error ? 'var(--color-error)' : focused ? 'var(--color-sky-400)' : 'var(--color-border)'),
    borderRadius: 'var(--radius-input)',
    paddingLeft: iconPaddingLeft,
    paddingRight: iconPaddingRight,
    outline: 'none',
    transition: 'border-color var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out)',
    boxShadow: focused ? error ? '0 0 0 3px rgba(240,76,76,0.12)' : '0 0 0 3px rgba(77,196,232,0.15)' : 'var(--shadow-xs)',
    cursor: disabled ? 'not-allowed' : 'text',
    opacity: disabled ? 0.6 : 1,
    ...style
  };
  const inputId = id || (label ? 'pwa-input-' + label.replace(/\s+/g, '-').toLowerCase() : undefined);
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-1-5)',
      ...containerStyle
    }
  }, label && React.createElement('label', {
    htmlFor: inputId,
    style: {
      fontSize: 'var(--text-sm)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-medium)',
      color: error ? 'var(--color-error)' : 'var(--color-text-primary)',
      letterSpacing: '-0.01em',
      userSelect: 'none'
    }
  }, label), React.createElement('div', {
    style: {
      position: 'relative'
    }
  }, icon && React.createElement('span', {
    style: {
      position: 'absolute',
      left: s.iconOffset,
      top: '50%',
      transform: 'translateY(-50%)',
      color: focused ? 'var(--color-sky-500)' : 'var(--color-text-tertiary)',
      display: 'flex',
      pointerEvents: 'none',
      transition: 'color var(--duration-fast) var(--ease-out)'
    }
  }, React.createElement('svg', {
    width: s.iconSize,
    height: s.iconSize,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  }, icon)), React.createElement('input', {
    id: inputId,
    type,
    placeholder,
    value,
    onChange,
    disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: inputStyle,
    ...rest
  }), iconRight && React.createElement('span', {
    style: {
      position: 'absolute',
      right: s.iconOffset,
      top: '50%',
      transform: 'translateY(-50%)',
      color: 'var(--color-text-tertiary)',
      display: 'flex',
      pointerEvents: 'none'
    }
  }, React.createElement('svg', {
    width: s.iconSize,
    height: s.iconSize,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  }, iconRight))), (hint || error) && React.createElement('p', {
    style: {
      margin: 0,
      fontSize: 'var(--text-xs)',
      fontFamily: 'var(--font-sans)',
      color: error ? 'var(--color-error)' : 'var(--color-text-secondary)',
      lineHeight: 'var(--leading-normal)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
/**
 * Radio — Single radio control; group by sharing `name` + comparing values.
 */
function Radio({
  checked = false,
  onChange,
  disabled = false,
  label,
  hint,
  size = 'md',
  value,
  name,
  style,
  ...rest
}) {
  const dims = {
    sm: 16,
    md: 20,
    lg: 24
  };
  const d = dims[size];
  const outerStyle = {
    width: d + 'px',
    height: d + 'px',
    flexShrink: 0,
    boxSizing: 'border-box',
    borderRadius: '50%',
    border: '1.5px solid ' + (checked ? 'var(--color-sky-500)' : 'var(--color-border-strong)'),
    background: 'var(--color-surface)',
    boxShadow: checked ? 'var(--shadow-sky-sm)' : 'var(--shadow-xs)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'border-color var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    outline: 'none'
  };
  const dotStyle = {
    width: Math.round(d * 0.5) + 'px',
    height: Math.round(d * 0.5) + 'px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, var(--color-sky-400), var(--color-sky-500))',
    transform: checked ? 'scale(1)' : 'scale(0)',
    transition: 'transform var(--duration-base) var(--ease-spring)'
  };
  const labelFontSize = size === 'sm' ? 'var(--text-sm)' : size === 'lg' ? 'var(--text-md)' : 'var(--text-base)';
  const handleClick = () => {
    if (!disabled) onChange && onChange(value !== undefined ? value : true);
  };
  const handleKey = e => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      handleClick();
    }
  };
  return React.createElement('div', {
    style: {
      display: 'inline-flex',
      alignItems: hint ? 'flex-start' : 'center',
      gap: 'var(--space-2-5)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      userSelect: 'none',
      ...style
    },
    onClick: handleClick,
    ...rest
  }, React.createElement('div', {
    style: outerStyle,
    role: 'radio',
    'aria-checked': checked,
    name,
    tabIndex: disabled ? -1 : 0,
    onKeyDown: handleKey
  }, React.createElement('div', {
    style: dotStyle
  })), (label || hint) && React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2px'
    }
  }, label && React.createElement('span', {
    style: {
      fontSize: labelFontSize,
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--color-text-primary)',
      lineHeight: 1.3
    }
  }, label), hint && React.createElement('span', {
    style: {
      fontSize: 'var(--text-xs)',
      fontFamily: 'var(--font-sans)',
      color: 'var(--color-text-secondary)',
      lineHeight: 1.3
    }
  }, hint)));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
/**
 * Select — Styled native select. Matches Input chrome; chevron indicator.
 */
function Select({
  label,
  hint,
  error,
  size = 'md',
  disabled = false,
  options = [],
  value,
  onChange,
  placeholder,
  id,
  style,
  containerStyle,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const sizes = {
    sm: {
      height: '34px',
      fontSize: 'var(--text-sm)',
      paddingH: 'var(--space-3)'
    },
    md: {
      height: '42px',
      fontSize: 'var(--text-base)',
      paddingH: 'var(--space-4)'
    },
    lg: {
      height: '52px',
      fontSize: 'var(--text-md)',
      paddingH: 'var(--space-5)'
    }
  };
  const s = sizes[size];
  const selectId = id || (label ? 'pwa-select-' + label.replace(/\s+/g, '-').toLowerCase() : undefined);
  const selectStyle = {
    width: '100%',
    boxSizing: 'border-box',
    height: s.height,
    fontFamily: 'var(--font-sans)',
    fontSize: s.fontSize,
    color: value === '' || value === undefined && placeholder ? 'var(--color-text-tertiary)' : 'var(--color-text-primary)',
    background: disabled ? 'var(--color-bg-secondary)' : 'var(--color-surface)',
    border: '1.5px solid ' + (error ? 'var(--color-error)' : focused ? 'var(--color-sky-400)' : 'var(--color-border)'),
    borderRadius: 'var(--radius-input)',
    paddingLeft: s.paddingH,
    paddingRight: '38px',
    outline: 'none',
    appearance: 'none',
    WebkitAppearance: 'none',
    transition: 'border-color var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out)',
    boxShadow: focused ? error ? '0 0 0 3px rgba(240,76,76,0.12)' : '0 0 0 3px rgba(77,196,232,0.15)' : 'var(--shadow-xs)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    ...style
  };
  const opts = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-1-5)',
      ...containerStyle
    }
  }, label && React.createElement('label', {
    htmlFor: selectId,
    style: {
      fontSize: 'var(--text-sm)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-medium)',
      color: error ? 'var(--color-error)' : 'var(--color-text-primary)',
      letterSpacing: '-0.01em',
      userSelect: 'none'
    }
  }, label), React.createElement('div', {
    style: {
      position: 'relative'
    }
  }, React.createElement('select', {
    id: selectId,
    value,
    onChange,
    disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: selectStyle,
    ...rest
  }, placeholder && React.createElement('option', {
    value: '',
    disabled: true
  }, placeholder), opts.map(o => React.createElement('option', {
    key: o.value,
    value: o.value
  }, o.label))), React.createElement('span', {
    style: {
      position: 'absolute',
      right: '12px',
      top: '50%',
      transform: 'translateY(-50%)',
      display: 'flex',
      pointerEvents: 'none',
      color: focused ? 'var(--color-sky-500)' : 'var(--color-text-tertiary)',
      transition: 'color var(--duration-fast) var(--ease-out)'
    }
  }, React.createElement('svg', {
    width: 16,
    height: 16,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  }, React.createElement('path', {
    d: 'm6 9 6 6 6-6'
  })))), (hint || error) && React.createElement('p', {
    style: {
      margin: 0,
      fontSize: 'var(--text-xs)',
      fontFamily: 'var(--font-sans)',
      color: error ? 'var(--color-error)' : 'var(--color-text-secondary)',
      lineHeight: 'var(--leading-normal)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
/**
 * Switch — Toggle control. Spring-animated thumb.
 * Perfect for automation on/off controls.
 */
function Switch({
  checked = false,
  onChange,
  disabled = false,
  label,
  hint,
  size = 'md',
  labelPosition = 'right',
  style,
  ...rest
}) {
  const dims = {
    sm: {
      trackW: 30,
      trackH: 18,
      thumbS: 14,
      offset: 2,
      onOffset: 14
    },
    md: {
      trackW: 44,
      trackH: 26,
      thumbS: 20,
      offset: 3,
      onOffset: 21
    },
    lg: {
      trackW: 56,
      trackH: 32,
      thumbS: 26,
      offset: 3,
      onOffset: 27
    }
  };
  const d = dims[size];
  const trackStyle = {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    width: d.trackW + 'px',
    height: d.trackH + 'px',
    borderRadius: 'var(--radius-full)',
    background: checked ? 'linear-gradient(135deg, var(--color-sky-400), var(--color-sky-500))' : 'var(--color-neutral-300)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'background var(--duration-base) var(--ease-out)',
    flexShrink: 0,
    boxShadow: checked ? 'var(--shadow-sky-sm)' : 'var(--shadow-inset-sm)',
    opacity: disabled ? 0.5 : 1,
    outline: 'none',
    border: 'none'
  };
  const thumbStyle = {
    position: 'absolute',
    width: d.thumbS + 'px',
    height: d.thumbS + 'px',
    borderRadius: '50%',
    background: '#ffffff',
    top: d.offset + 'px',
    left: (checked ? d.onOffset : d.offset) + 'px',
    transition: 'left var(--duration-base) var(--ease-spring)',
    boxShadow: '0 1px 4px rgba(0,0,0,0.22), 0 0 0 0.5px rgba(0,0,0,0.06)',
    pointerEvents: 'none'
  };
  const labelFontSize = size === 'sm' ? 'var(--text-sm)' : size === 'lg' ? 'var(--text-md)' : 'var(--text-base)';
  const handleClick = () => {
    if (!disabled) onChange && onChange(!checked);
  };
  const handleKey = e => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      handleClick();
    }
  };
  return React.createElement('div', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      userSelect: 'none',
      flexDirection: labelPosition === 'left' ? 'row-reverse' : 'row',
      ...style
    },
    ...rest
  }, React.createElement('div', {
    style: trackStyle,
    onClick: handleClick,
    onKeyDown: handleKey,
    role: 'switch',
    'aria-checked': checked,
    tabIndex: disabled ? -1 : 0
  }, React.createElement('div', {
    style: thumbStyle
  })), (label || hint) && React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2px'
    }
  }, label && React.createElement('span', {
    style: {
      fontSize: labelFontSize,
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--color-text-primary)',
      lineHeight: 1.2
    }
  }, label), hint && React.createElement('span', {
    style: {
      fontSize: 'var(--text-xs)',
      fontFamily: 'var(--font-sans)',
      color: 'var(--color-text-secondary)',
      lineHeight: 1.3
    }
  }, hint)));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/**
 * Tabs — Segmented pill tabs (default) or underline variant.
 */
function Tabs({
  tabs = [],
  active,
  onChange,
  variant = 'pill',
  size = 'md',
  fullWidth = false,
  style,
  ...rest
}) {
  const items = tabs.map(t => typeof t === 'string' ? {
    id: t,
    label: t
  } : t);
  const sizes = {
    sm: {
      height: '30px',
      fontSize: 'var(--text-sm)',
      padding: '0 var(--space-3)'
    },
    md: {
      height: '36px',
      fontSize: 'var(--text-base)',
      padding: '0 var(--space-4)'
    },
    lg: {
      height: '44px',
      fontSize: 'var(--text-md)',
      padding: '0 var(--space-5)'
    }
  };
  const s = sizes[size];
  if (variant === 'underline') {
    return React.createElement('div', {
      style: {
        display: 'flex',
        gap: 'var(--space-1)',
        borderBottom: '1px solid var(--color-border)',
        fontFamily: 'var(--font-sans)',
        ...style
      },
      role: 'tablist',
      ...rest
    }, items.map(t => {
      const isActive = t.id === active;
      return React.createElement('button', {
        key: t.id,
        role: 'tab',
        'aria-selected': isActive,
        onClick: () => onChange && onChange(t.id),
        style: {
          height: s.height,
          padding: s.padding,
          fontSize: s.fontSize,
          fontFamily: 'inherit',
          fontWeight: isActive ? 'var(--weight-semibold)' : 'var(--weight-medium)',
          color: isActive ? 'var(--color-navy-900)' : 'var(--color-text-secondary)',
          background: 'none',
          border: 'none',
          outline: 'none',
          cursor: 'pointer',
          borderBottom: '2px solid ' + (isActive ? 'var(--color-sky-400)' : 'transparent'),
          marginBottom: '-1px',
          letterSpacing: '-0.01em',
          whiteSpace: 'nowrap',
          transition: 'color var(--duration-fast) var(--ease-out), border-color var(--duration-fast) var(--ease-out)',
          flex: fullWidth ? 1 : undefined
        }
      }, t.label);
    }));
  }
  return React.createElement('div', {
    style: {
      display: 'inline-flex',
      gap: '2px',
      padding: '3px',
      background: 'var(--color-bg-secondary)',
      borderRadius: 'var(--radius-nav)',
      boxShadow: 'var(--shadow-inset-xs)',
      fontFamily: 'var(--font-sans)',
      width: fullWidth ? '100%' : undefined,
      boxSizing: 'border-box',
      ...style
    },
    role: 'tablist',
    ...rest
  }, items.map(t => {
    const isActive = t.id === active;
    return React.createElement('button', {
      key: t.id,
      role: 'tab',
      'aria-selected': isActive,
      onClick: () => onChange && onChange(t.id),
      style: {
        height: s.height,
        padding: s.padding,
        fontSize: s.fontSize,
        fontFamily: 'inherit',
        fontWeight: isActive ? 'var(--weight-semibold)' : 'var(--weight-medium)',
        color: isActive ? 'var(--color-navy-900)' : 'var(--color-text-secondary)',
        background: isActive ? 'var(--color-surface)' : 'transparent',
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
        borderRadius: 'calc(var(--radius-nav) - 3px)',
        boxShadow: isActive ? 'var(--shadow-sm)' : 'none',
        letterSpacing: '-0.01em',
        whiteSpace: 'nowrap',
        transition: 'background var(--duration-base) var(--ease-out), color var(--duration-fast) var(--ease-out), box-shadow var(--duration-base) var(--ease-out)',
        flex: fullWidth ? 1 : undefined
      }
    }, t.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/shared.js
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Shared PWA dashboard shell components — load AFTER React, with type="text/babel" */
function PwaBtn({
  v = 'primary',
  sz = 'md',
  icon,
  onClick,
  fw,
  children,
  style = {},
  ...r
}) {
  const S = {
    xs: {
      h: '28px',
      p: '0 10px',
      fs: '11px',
      g: '4px'
    },
    sm: {
      h: '34px',
      p: '0 16px',
      fs: '13px',
      g: '6px'
    },
    md: {
      h: '42px',
      p: '0 20px',
      fs: '15px',
      g: '8px'
    },
    lg: {
      h: '52px',
      p: '0 28px',
      fs: '17px',
      g: '10px'
    }
  }[sz] || {};
  const V = {
    primary: {
      background: 'linear-gradient(180deg,#1a278a,#132272)',
      color: '#fff',
      border: '1px solid rgba(255,255,255,.08)',
      boxShadow: '0 4px 12px rgba(19,34,114,.2)'
    },
    secondary: {
      background: 'linear-gradient(180deg,#4dc4e8,#2ab0d8)',
      color: '#fff',
      border: '1px solid rgba(255,255,255,.15)',
      boxShadow: '0 4px 12px rgba(77,196,232,.25)'
    },
    ghost: {
      background: 'transparent',
      color: '#132272',
      border: '1px solid #d2d2d7',
      boxShadow: '0 1px 2px rgba(0,0,0,.04)'
    },
    danger: {
      background: 'linear-gradient(180deg,#f26060,#f04c4c)',
      color: '#fff',
      border: 'none',
      boxShadow: '0 4px 12px rgba(240,76,76,.25)'
    },
    text: {
      background: 'transparent',
      color: '#1a278a',
      border: 'none',
      boxShadow: 'none'
    }
  }[v] || {};
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: S.g,
    borderRadius: '9999px',
    fontFamily: 'DM Sans,system-ui,sans-serif',
    fontWeight: 500,
    letterSpacing: '-.01em',
    cursor: 'pointer',
    outline: 'none',
    whiteSpace: 'nowrap',
    userSelect: 'none',
    transition: 'transform .24s cubic-bezier(.34,1.56,.64,1),box-shadow .24s ease',
    width: fw ? '100%' : undefined,
    height: S.h,
    padding: S.p,
    fontSize: S.fs,
    flexShrink: 0,
    ...V,
    ...style
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    onClick: onClick,
    style: base,
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'translateY(-1px) scale(1.015)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = '';
    },
    onMouseDown: e => {
      e.currentTarget.style.transform = 'scale(.97)';
    }
  }, r), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex'
    }
  }, icon), children);
}
function PwaCrd({
  variant = 'default',
  padding = 24,
  radius = 24,
  children,
  style = {},
  ...r
}) {
  const V = {
    default: {
      background: '#fff',
      border: '1px solid #d2d2d7',
      boxShadow: '0 1px 3px rgba(0,0,0,.08)'
    },
    navy: {
      background: 'linear-gradient(145deg,#1a278a,#132272)',
      border: '1px solid rgba(255,255,255,.1)',
      boxShadow: '0 8px 24px rgba(19,34,114,.22)',
      color: '#fff'
    },
    flat: {
      background: '#f5f5f7',
      border: 'none',
      boxShadow: 'none'
    }
  }[variant] || {};
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: radius,
      padding,
      ...V,
      ...style
    }
  }, r), children);
}
function PwaBdg({
  variant = 'default',
  size = 'md',
  dot = false,
  pulse = false,
  children,
  style = {}
}) {
  const V = {
    default: {
      background: '#e8e8ed',
      color: '#48484a',
      border: '1px solid #d2d2d7'
    },
    primary: {
      background: '#eef0fa',
      color: '#1a278a',
      border: '1px solid #d5daf4'
    },
    sky: {
      background: '#e7f8fd',
      color: '#157ba0',
      border: '1px solid #c4eef9'
    },
    success: {
      background: '#d4f5e2',
      color: '#1a7a4a',
      border: '1px solid rgba(48,201,122,.22)'
    },
    warning: {
      background: '#fff3d4',
      color: '#966200',
      border: '1px solid rgba(255,179,64,.28)'
    },
    danger: {
      background: '#fde8e8',
      color: '#a01a1a',
      border: '1px solid rgba(240,76,76,.22)'
    }
  }[variant] || {};
  const SZ = {
    sm: {
      fontSize: '10px',
      padding: '0 7px',
      height: '18px',
      gap: '4px'
    },
    md: {
      fontSize: '12px',
      padding: '0 9px',
      height: '22px',
      gap: '5px'
    }
  }[size] || {};
  const dotC = {
    success: '#30c97a',
    danger: '#f04c4c',
    warning: '#ffb340',
    primary: '#22359e',
    sky: '#2ab0d8'
  }[variant] || '#98989d';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '9999px',
      fontFamily: 'DM Sans,system-ui,sans-serif',
      fontWeight: 500,
      letterSpacing: '.01em',
      whiteSpace: 'nowrap',
      lineHeight: 1,
      ...SZ,
      ...V,
      ...style
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: size === 'sm' ? 5 : 6,
      height: size === 'sm' ? 5 : 6,
      flexShrink: 0,
      borderRadius: '50%',
      background: dotC,
      display: 'inline-block',
      animation: pulse ? 'pwa-pulse-glow 1.8s ease-in-out infinite' : 'none'
    }
  }), children);
}
function PwaSw({
  checked = false,
  onChange,
  label,
  hint,
  size = 'sm'
}) {
  const D = {
    sm: {
      tw: 30,
      th: 18,
      ts: 14,
      off: 2,
      on: 14
    },
    md: {
      tw: 44,
      th: 26,
      ts: 20,
      off: 3,
      on: 21
    }
  }[size] || {};
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      cursor: 'pointer',
      userSelect: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: D.tw,
      height: D.th,
      borderRadius: '9999px',
      background: checked ? 'linear-gradient(135deg,#4dc4e8,#2ab0d8)' : '#b5b5bb',
      transition: 'background .24s ease',
      flexShrink: 0,
      boxShadow: checked ? '0 4px 12px rgba(77,196,232,.22)' : 'inset 0 1px 3px rgba(0,0,0,.08)'
    },
    onClick: () => onChange && onChange(!checked),
    role: "switch",
    "aria-checked": checked
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      width: D.ts,
      height: D.ts,
      borderRadius: '50%',
      background: '#fff',
      top: D.off,
      left: checked ? D.on : D.off,
      transition: 'left .24s cubic-bezier(.34,1.56,.64,1)',
      boxShadow: '0 1px 4px rgba(0,0,0,.22)',
      pointerEvents: 'none'
    }
  })), (label || hint) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontFamily: 'DM Sans,system-ui,sans-serif',
      fontWeight: 500,
      color: '#1d1d1f',
      lineHeight: 1.2
    }
  }, label), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontFamily: 'DM Sans,system-ui,sans-serif',
      color: '#6e6e73',
      lineHeight: 1.3
    }
  }, hint)));
}
function PwaField({
  label,
  type = 'text',
  placeholder,
  defaultValue,
  hint,
  style = {}
}) {
  const [f, setF] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 13,
      fontFamily: 'DM Sans,system-ui,sans-serif',
      fontWeight: 500,
      color: '#1d1d1f',
      letterSpacing: '-.01em'
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    type: type,
    placeholder: placeholder,
    defaultValue: defaultValue,
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: {
      width: '100%',
      boxSizing: 'border-box',
      height: 42,
      fontFamily: 'DM Sans,system-ui,sans-serif',
      fontSize: 15,
      color: '#1d1d1f',
      background: '#fff',
      border: '1.5px solid ' + (f ? '#4dc4e8' : '#d2d2d7'),
      borderRadius: 12,
      padding: '0 16px',
      outline: 'none',
      transition: 'border-color .12s ease, box-shadow .12s ease',
      boxShadow: f ? '0 0 0 3px rgba(77,196,232,.15)' : '0 1px 2px rgba(0,0,0,.04)'
    }
  }), hint && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 11,
      fontFamily: 'DM Sans,system-ui,sans-serif',
      color: '#6e6e73'
    }
  }, hint));
}
const PWA_NAV = [{
  id: 'overview',
  l: 'Overview',
  href: 'index.html',
  ico: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "9 22 9 12 15 12 15 22"
  }))
}, {
  id: 'clients',
  l: 'Clients',
  href: 'client-detail.html',
  ico: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "7",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
  }))
}, {
  id: 'projects',
  l: 'Projects',
  href: 'index.html',
  ico: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "7",
    height: "7"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "3",
    width: "7",
    height: "7"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "14",
    width: "7",
    height: "7"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "14",
    width: "7",
    height: "7"
  }))
}, {
  id: 'tasks',
  l: 'Tasks',
  href: 'index.html',
  ico: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("polyline", {
    points: "9 11 12 14 22 4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"
  }))
}, {
  id: 'settings',
  l: 'Settings',
  href: 'settings.html',
  ico: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"
  }))
}];
function PwaSidebar({
  active
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 240,
      height: '100vh',
      position: 'fixed',
      left: 0,
      top: 0,
      background: '#132272',
      display: 'flex',
      flexDirection: 'column',
      zIndex: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '22px 20px 18px',
      borderBottom: '1px solid rgba(255,255,255,.08)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo.png",
    alt: "PWA",
    style: {
      height: 30,
      filter: 'brightness(0) invert(1)'
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      flex: 1,
      padding: '12px 10px',
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      overflowY: 'auto'
    }
  }, PWA_NAV.map(item => {
    const isA = active === item.id;
    return /*#__PURE__*/React.createElement("a", {
      key: item.id,
      href: item.href,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '9px 12px',
        borderRadius: 10,
        background: isA ? 'rgba(255,255,255,.12)' : 'transparent',
        textDecoration: 'none',
        cursor: 'pointer',
        color: isA ? '#fff' : 'rgba(255,255,255,.5)',
        fontFamily: 'DM Sans,system-ui,sans-serif',
        fontSize: 14,
        fontWeight: 500,
        transition: 'all .15s'
      },
      onMouseEnter: e => {
        if (!isA) {
          e.currentTarget.style.background = 'rgba(255,255,255,.07)';
          e.currentTarget.style.color = '#fff';
        }
      },
      onMouseLeave: e => {
        if (!isA) {
          e.currentTarget.style.background = 'transparent';
          e.currentTarget.style.color = 'rgba(255,255,255,.5)';
        }
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "17",
      height: "17",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, item.ico), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, item.l));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 18px',
      borderTop: '1px solid rgba(255,255,255,.08)',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: '50%',
      background: 'linear-gradient(135deg,#4dc4e8,#2ab0d8)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 12,
      fontWeight: 700,
      color: '#fff',
      fontFamily: 'Outfit,system-ui,sans-serif',
      flexShrink: 0
    }
  }, "JO"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: '#fff',
      fontFamily: 'DM Sans,system-ui,sans-serif',
      lineHeight: 1.2
    }
  }, "Justin Okamoto"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'rgba(255,255,255,.4)',
      fontFamily: 'DM Sans,system-ui,sans-serif'
    }
  }, "Operations Lead"))));
}
function PwaTopBar({
  title,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 60,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 28px',
      background: '#fff',
      borderBottom: '1px solid #d2d2d7',
      position: 'sticky',
      top: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'Outfit,system-ui,sans-serif',
      fontSize: 18,
      fontWeight: 700,
      letterSpacing: '-.02em',
      color: '#132272',
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, children, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 34,
      height: 34,
      borderRadius: '50%',
      background: 'linear-gradient(135deg,#4dc4e8,#2ab0d8)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 12,
      fontWeight: 700,
      color: '#fff',
      fontFamily: 'Outfit,system-ui,sans-serif',
      cursor: 'pointer'
    }
  }, "JO")));
}
Object.assign(window, {
  PwaBtn,
  PwaCrd,
  PwaBdg,
  PwaSw,
  PwaField,
  PwaSidebar,
  PwaTopBar,
  PWA_NAV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/shared.js", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
