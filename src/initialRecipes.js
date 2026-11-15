const item = (
  id,
  name,
  price,
  packQty,
  usage,
  packUnit,
  usageUnit,
  kind = 'ingredient'
) => ({
  id,
  name,
  price,
  packQty,
  usage,
  packUnit,
  usageUnit,
  kind,
  active: true,
});

const base = (id, name, items, customPrice) => ({
  id,
  name,
  category: '',
  cups: 1,
  items,
  overheads: [],
  overheadsActive: true,
  target: '',
  pricing: { percent: 45, customPrice },
  marginActive: true,
  updatedAt: '2026-11-15T00:00:00.000Z',
});

export const initialRecipes = [
  {
    id: '10000000-0000-4000-8000-000000000001',
    name: 'Longblack',
    updated_at: '2026-11-15T00:00:00.000Z',
    data: base(
      '10000000-0000-4000-8000-000000000001',
      'Longblack',
      [
        item(
          '10000000-0000-4000-8000-000000001001',
          'Expreso 90a:10r + Air 2.5L',
          190500,
          2,
          36,
          'L',
          'ml'
        ),
        item(
          '10000000-0000-4000-8000-000000001002',
          'Air',
          19000,
          19,
          80,
          'L',
          'ml'
        ),
        item(
          '10000000-0000-4000-8000-000000001003',
          'Es Batu',
          10000,
          10,
          120,
          'kg',
          'g'
        ),
        item(
          '10000000-0000-4000-8000-000000001004',
          'Cup',
          1000,
          1,
          1,
          'pcs',
          'pcs',
          'packaging'
        ),
      ],
      10000
    ),
  },
  {
    id: '10000000-0000-4000-8000-000000000002',
    name: 'BerryCano',
    updated_at: '2026-11-15T00:00:00.000Z',
    data: base(
      '10000000-0000-4000-8000-000000000002',
      'BerryCano',
      [
        item(
          '10000000-0000-4000-8000-000000002001',
          'Expreso 90a:10r + Air 2.5L',
          190500,
          2,
          30,
          'L',
          'ml'
        ),
        item(
          '10000000-0000-4000-8000-000000002002',
          'Butterscotch Sirup',
          110000,
          1000,
          10,
          'ml',
          'ml'
        ),
        item(
          '10000000-0000-4000-8000-000000002003',
          'Mix Berry Sauce',
          90000,
          1,
          15,
          'kg',
          'g'
        ),
        item(
          '10000000-0000-4000-8000-000000002004',
          'Gula Cair',
          75000,
          3,
          15,
          'kg',
          'g'
        ),
        item(
          '10000000-0000-4000-8000-000000002005',
          'Air',
          19000,
          19,
          50,
          'L',
          'ml'
        ),
        item(
          '10000000-0000-4000-8000-000000002006',
          'Es Batu',
          10000,
          10,
          120,
          'kg',
          'g'
        ),
        item(
          '10000000-0000-4000-8000-000000002007',
          'Cup',
          1000,
          1,
          1,
          'pcs',
          'pcs',
          'packaging'
        ),
      ],
      12000
    ),
  },
  {
    id: '10000000-0000-4000-8000-000000000003',
    name: 'PeachCano',
    updated_at: '2026-11-15T00:00:00.000Z',
    data: base(
      '10000000-0000-4000-8000-000000000003',
      'PeachCano',
      [
        item(
          '10000000-0000-4000-8000-000000003001',
          'Expreso 90a:10r + Air 2.5L',
          190500,
          2,
          30,
          'L',
          'ml'
        ),
        item(
          '10000000-0000-4000-8000-000000003002',
          'Gula Cair',
          75000,
          3,
          15,
          'kg',
          'g'
        ),
        item(
          '10000000-0000-4000-8000-000000003003',
          'Air',
          19000,
          19,
          50,
          'L',
          'ml'
        ),
        item(
          '10000000-0000-4000-8000-000000003004',
          'Lemonade Sirup',
          110000,
          1000,
          10,
          'ml',
          'ml'
        ),
        item(
          '10000000-0000-4000-8000-000000003005',
          'Peace Sauce',
          90000,
          1,
          15,
          'kg',
          'g'
        ),
        item(
          '10000000-0000-4000-8000-000000003006',
          'Es Batu',
          10000,
          10,
          120,
          'kg',
          'g'
        ),
        item(
          '10000000-0000-4000-8000-000000003007',
          'Cup',
          1000,
          1,
          1,
          'pcs',
          'pcs',
          'packaging'
        ),
      ],
      12000
    ),
  },
];
