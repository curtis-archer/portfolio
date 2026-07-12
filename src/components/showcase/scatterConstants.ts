export type DotKind = 'gray' | 'orange' | 'orange-lg'

export type ScatterDot = {
  cx: number
  kind: DotKind
  value: string
  productName: string
  productImage: string
}

export const SCATTER_VIEWBOX = { width: 208.122, height: 22 } as const

export const SCATTER_AXIS_Y = 4.1

export const SCATTER_TICKS = [26.48, 104.68, 183.49]

export const DOT_RADIUS: Record<DotKind, number> = {
  gray: 3.69,
  orange: 3.69,
  'orange-lg': 4.93,
}

export const DOT_FILL: Record<DotKind, string> = {
  gray: '#d9d9d9',
  orange: '#ff5e00',
  'orange-lg': '#ff5e00',
}

export const TOOLTIP_DOT_FILL: Record<DotKind, string> = {
  gray: '#c2c2c2',
  orange: '#ff5e00',
  'orange-lg': '#ff5e00',
}

export const SCATTER_DOTS: ScatterDot[] = [
  {
    cx: 3.69,
    kind: 'orange',
    value: '142K',
    productName: 'Olfa 45mm Rotary Cutter Refill Blades, 10-Pack',
    productImage: '/assets/showcase/products/rotary-cutter.svg',
  },
  {
    cx: 17.24,
    kind: 'orange',
    value: '168K',
    productName: 'Gingher 8" Dressmaker Shears, Left-Handed',
    productImage: '/assets/showcase/products/scissors.svg',
  },
  {
    cx: 20.94,
    kind: 'orange',
    value: '195K',
    productName: 'Fiskars Acrylic Quilting Ruler Set, 3-Piece',
    productImage: '/assets/showcase/products/ruler.svg',
  },
  {
    cx: 29.56,
    kind: 'gray',
    value: '241K',
    productName: 'Coats & Clark All-Purpose Thread, 24 Spool Set',
    productImage: '/assets/showcase/products/thread.svg',
  },
  {
    cx: 39.41,
    kind: 'gray',
    value: '312K',
    productName: 'Dritz Seam Ripper with Ergonomic Handle, 3-Pack',
    productImage: '/assets/showcase/products/seam-ripper.svg',
  },
  {
    cx: 41.87,
    kind: 'gray',
    value: '328K',
    productName: 'Fiskars 24x36 Self-Healing Cutting Mat, Grid',
    productImage: '/assets/showcase/products/cutting-mat.svg',
  },
  {
    cx: 48.03,
    kind: 'gray',
    value: '364K',
    productName: 'Clover Embroidery Hoop Set, Assorted Sizes',
    productImage: '/assets/showcase/products/embroidery-hoop.svg',
  },
  {
    cx: 57.88,
    kind: 'gray',
    value: '421K',
    productName: 'Schmetz Universal Sewing Machine Needles, 100-Count',
    productImage: '/assets/showcase/products/needles.svg',
  },
  {
    cx: 65.27,
    kind: 'gray',
    value: '478K',
    productName: 'HeatnBond Iron-On Patches, Denim Assortment',
    productImage: '/assets/showcase/products/patches.svg',
  },
  {
    cx: 77.59,
    kind: 'orange-lg',
    value: '823K',
    productName:
      'Rotary Cutter Set, 45mm Fabric Cutter Kit with 5 Extra Blades, 10 Sewing Clips, Tape Measure, Yarn Scissors and Storage Bag',
    productImage: '/assets/showcase/products/rotary-cutter.svg',
  },
  {
    cx: 88.67,
    kind: 'gray',
    value: '612K',
    productName: 'Dritz Tailor Chalk Markers, White & Blue, 4-Pack',
    productImage: '/assets/showcase/products/chalk.svg',
  },
  {
    cx: 146.55,
    kind: 'gray',
    value: '1.1M',
    productName: 'Adjustable Dress Form Mannequin, Size 8-10, Pinnable',
    productImage: '/assets/showcase/products/mannequin.svg',
  },
  {
    cx: 169.94,
    kind: 'gray',
    value: '1.4M',
    productName: 'Maxi-Lock Serger Thread Cone Pack, 12 Colors',
    productImage: '/assets/showcase/products/serger-thread.svg',
  },
  {
    cx: 204.43,
    kind: 'gray',
    value: '1.9M',
    productName: 'Singer Heavy Duty Sewing Table with Storage Cabinet',
    productImage: '/assets/showcase/products/sewing-table.svg',
  },
]
