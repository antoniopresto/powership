import { getDocumentIndexFields } from '../CollectionIndex';

describe('getDocumentIndexFields', () => {
  it('should mount PK', async () => {
    const sut = getDocumentIndexFields(
      { name: 'fulano', age: 5 },
      {
        entity: 'foo',
        indexes: [
          {
            name: '_id',
            PK: ['.name'],
            SK: ['.age'],
          },
          {
            name: '_id1',
            PK: ['.age'],
            SK: ['.name'],
          },
        ],
      }
    );

    expect(sut).toEqual({
      error: null,
      firstIndex: {
        PK: ['.name'],
        PKPart: 'foo⋮_id⋮fulano⋮',
        PKPartOpen: 'foo⋮_id⋮fulano',
        SK: ['.age'],
        SKPart: '715',
        cursor: 'foo⋮_id⋮fulano⋮715⋮',
        entity: 'foo',
        key: '_id',
        name: '_id',
        parentPrefix: null,
        relatedTo: null,
        value: 'foo⋮_id⋮fulano⋮715⋮',
      },
      indexFields: {
        _c: '~!Zm9v4ouuX2lk4ouuZnVsYW5v4ouuNzE14ouu',
        _e: 'foo',
        _id: 'foo⋮_id⋮fulano⋮715⋮',
        _id1: 'foo⋮_id1⋮715⋮fulano⋮',
        _id1PK: 'foo⋮_id1⋮715⋮',
        _id1SK: 'fulano',
        _idPK: 'foo⋮_id⋮fulano⋮',
        _idSK: '715',
      },
      invalidFields: null,
      parsedIndexKeys: [
        {
          PK: {
            definition: ['.name'],
            parsed: {
              PK_SK: 'PK',
              foundParts: ['fulano'],
              indexField: '_id',
              invalidFields: [],
              isFilter: false,
              requiredFields: ['name'],
              valid: true,
            },
            requiredFields: ['name'],
          },
          SK: {
            definition: ['.age'],
            parsed: {
              PK_SK: 'SK',
              foundParts: ['715'],
              indexField: '_id',
              invalidFields: [],
              isFilter: false,
              requiredFields: ['age'],
              valid: true,
            },
            requiredFields: ['age'],
          },
          entity: 'foo',
          index: {
            PK: ['.name'],
            SK: ['.age'],
            name: '_id',
          },
        },
        {
          PK: {
            definition: ['.age'],
            parsed: {
              PK_SK: 'PK',
              foundParts: ['715'],
              indexField: '_id1',
              invalidFields: [],
              isFilter: false,
              requiredFields: ['age'],
              valid: true,
            },
            requiredFields: ['age'],
          },
          SK: {
            definition: ['.name'],
            parsed: {
              PK_SK: 'SK',
              foundParts: ['fulano'],
              indexField: '_id1',
              invalidFields: [],
              isFilter: false,
              requiredFields: ['name'],
              valid: true,
            },
            requiredFields: ['name'],
          },
          entity: 'foo',
          index: {
            PK: ['.age'],
            SK: ['.name'],
            name: '_id1',
          },
        },
      ],
      valid: true,
    });
  });

  it('should mount PK + SK', async () => {
    const oneField = getDocumentIndexFields(
      { name: 'NAME', age: 0 },
      {
        entity: 'foo',
        indexes: [
          {
            name: '_id',
            PK: ['.age', '.name'],
            SK: ['#nice', '.age'],
          },
        ],
      }
    );

    expect(oneField).toEqual({
      error: null,
      firstIndex: {
        PK: ['.age', '.name'],
        PKPart: 'foo⋮_id⋮5∙NAME⋮',
        PKPartOpen: 'foo⋮_id⋮5∙NAME',
        SK: ['#nice', '.age'],
        entity: 'foo',
        SKPart: 'nice∙5',
        parentPrefix: null,
        relatedTo: null,
        cursor: 'foo⋮_id⋮5∙NAME⋮nice∙5⋮',
        key: '_id',
        name: '_id',
        value: 'foo⋮_id⋮5∙NAME⋮nice∙5⋮',
      },
      indexFields: {
        _e: 'foo',
        _id: 'foo⋮_id⋮5∙NAME⋮nice∙5⋮',
        _idPK: 'foo⋮_id⋮5∙NAME⋮',
        _idSK: 'nice∙5',
        _c: '~!Zm9v4ouuX2lk4ouuNeKImU5BTUXii65uaWNl4oiZNeKLrg==',
      },
      invalidFields: null,
      parsedIndexKeys: [
        {
          PK: {
            definition: ['.age', '.name'],
            parsed: expect.any(Object),
            requiredFields: ['age', 'name'],
          },
          SK: {
            definition: ['#nice', '.age'],
            parsed: expect.any(Object),
            requiredFields: ['age'],
          },
          entity: 'foo',
          index: {
            PK: ['.age', '.name'],
            SK: ['#nice', '.age'],
            name: '_id',
          },
        },
      ],
      valid: true,
    });
  });

  it('should throw on missing fields', async () => {
    const oneField = getDocumentIndexFields(
      { name: '' },
      {
        entity: 'foo',
        indexes: [
          {
            name: '_id',
            PK: ['.age', '.name'],
            SK: ['#nice', '.age'],
          },
        ],
      }
    );

    expect(oneField).toEqual({
      error: expect.any(Object),
      firstIndex: undefined,
      indexFields: null,
      invalidFields: [
        {
          details: 'Expected string or number, found undefined.',
          documentField: '.age',
          indexField: '_id',
          indexPartKind: 'PK',
          reason: 'missing',
        },
        {
          details: 'Expected string or number, found string with value: .',
          documentField: '.name',
          indexField: '_id',
          indexPartKind: 'PK',
          reason: 'invalid',
        },
        {
          details: 'Expected string or number, found undefined.',
          documentField: '.age',
          indexField: '_id',
          indexPartKind: 'SK',
          reason: 'missing',
        },
      ],
      parsedIndexKeys: [
        {
          PK: {
            definition: ['.age', '.name'],
            parsed: expect.any(Object),
            requiredFields: ['age', 'name'],
          },
          SK: {
            definition: ['#nice', '.age'],
            parsed: expect.any(Object),
            requiredFields: ['age'],
          },
          entity: 'foo',
          index: {
            PK: ['.age', '.name'],
            SK: ['#nice', '.age'],
            name: '_id',
          },
        },
      ],
      valid: false,
    });
  });

  describe('relatedTo', () => {
    test('case 1', () => {
      const oneField = getDocumentIndexFields(
        { accountId: 1234, kind: 'phone', value: '+55119988788' },
        {
          entity: 'AccessType',
          indexes: [
            {
              name: '_id',
              PK: ['.accountId'],
              SK: ['.kind', '.value'],
              relatedTo: 'Account', // account⋮_id⋮741234⊰accesstype⋮phone∙+55119988788⋮
            },
          ],
        }
      );

      expect(oneField).toEqual({
        error: null,
        firstIndex: {
          PK: ['.accountId'],
          PKPart: 'account⋮_id⋮741234⊰accesstype⋮',
          PKPartOpen: 'account⋮_id⋮741234⊰accesstype',
          SK: ['.kind', '.value'],
          SKPart: 'phone∙+55119988788',
          cursor: 'account⋮_id⋮741234⊰accesstype⋮phone∙+55119988788⋮',
          entity: 'accesstype',
          parentPrefix: 'account⋮_id⋮741234⊰',
          key: '_id',
          name: '_id',
          relatedTo: 'account',
          value: 'account⋮_id⋮741234⊰accesstype⋮phone∙+55119988788⋮',
        },
        indexFields: {
          _e: 'accesstype',
          _id: 'account⋮_id⋮741234⊰accesstype⋮phone∙+55119988788⋮',
          _idPK: 'account⋮_id⋮741234⊰accesstype⋮',
          _idSK: 'phone∙+55119988788',
          _rpk: ['account⋮_id⋮741234⊰'],
          _c: '~!YWNjb3VudOKLrl9pZOKLrjc0MTIzNOKKsGFjY2Vzc3R5cGXii65waG9uZeKImSs1NTExOTk4ODc4OOKLrg==',
        },
        invalidFields: null,
        parsedIndexKeys: [
          {
            PK: {
              definition: ['.accountId'],
              parsed: {
                PK_SK: 'PK',
                foundParts: ['741234'],
                indexField: '_id',
                invalidFields: [],
                isFilter: false,
                requiredFields: ['accountId'],
                valid: true,
              },
              requiredFields: ['accountId'],
            },
            SK: {
              definition: ['.kind', '.value'],
              parsed: {
                PK_SK: 'SK',
                foundParts: ['phone', '+55119988788'],
                indexField: '_id',
                invalidFields: [],
                isFilter: false,
                requiredFields: ['kind', 'value'],
                valid: true,
              },
              requiredFields: ['kind', 'value'],
            },
            entity: 'accesstype',
            index: {
              PK: ['.accountId'],
              SK: ['.kind', '.value'],
              name: '_id',
              relatedTo: 'account',
            },
          },
        ],
        valid: true,
      });
    });
  });
});
