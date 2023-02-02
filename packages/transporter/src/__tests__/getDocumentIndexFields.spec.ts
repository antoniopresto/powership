import { parseIndexFieldName } from '@backland/utils';

import { getDocumentIndexFields } from '../getDocumentIndexFields';

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
        PKFieldName: '_idPK',
        PKPart: 'foo⋮_id⋮fulano⋮',
        PKPartOpen: 'foo⋮_id⋮fulano',
        SK: ['.age'],
        SKFieldName: '_idSK',
        SKPart: '715',
        cursor: 'foo⋮_id⋮fulano⋮715⋮',
        entity: 'foo',
        filter: {
          _idPK: 'foo⋮_id⋮fulano⋮',
          _idSK: '715',
        },
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
            destinationField: {
              key: '_idPK',
              value: 'foo⋮_id⋮fulano⋮',
            },
            parsed: {
              PK_SK: 'PK',
              foundParts: ['fulano'],
              fullIndexFound: null,
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
            destinationField: {
              key: '_idSK',
              value: '715',
            },
            parsed: {
              PK_SK: 'SK',
              foundParts: ['715'],
              fullIndexFound: null,
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
          indexFieldsParsed: {
            PKField: '_idPK',
            SKField: '_idSK',
            documentFields: {
              _c: '~!Zm9v4ouuX2lk4ouuZnVsYW5v4ouuNzE14ouu',
              _e: 'foo',
              _id: 'foo⋮_id⋮fulano⋮715⋮',
              _idPK: 'foo⋮_id⋮fulano⋮',
              _idSK: '715',
            },
          },
        },
        {
          PK: {
            definition: ['.age'],
            destinationField: {
              key: '_id1PK',
              value: 'foo⋮_id1⋮715⋮',
            },
            parsed: {
              PK_SK: 'PK',
              foundParts: ['715'],
              fullIndexFound: null,
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
            destinationField: {
              key: '_id1SK',
              value: 'fulano',
            },
            parsed: {
              PK_SK: 'SK',
              foundParts: ['fulano'],
              fullIndexFound: null,
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
          indexFieldsParsed: {
            PKField: '_id1PK',
            SKField: '_id1SK',
            documentFields: {
              _c: '~!Zm9v4ouuX2lkMeKLrjcxNeKLrmZ1bGFub+KLrg==',
              _e: 'foo',
              _id: 'foo⋮_id1⋮715⋮fulano⋮',
              _id1: 'foo⋮_id1⋮715⋮fulano⋮',
              _id1PK: 'foo⋮_id1⋮715⋮',
              _id1SK: 'fulano',
            },
          },
        },
      ],
      valid: true,
    });
  });

  test('parseIndexFieldName', () => {
    expect(parseIndexFieldName('GS1', 'SK')).toEqual('GS1SK');
    expect(parseIndexFieldName('GS1', 'PK')).toEqual('GS1PK');
    expect(parseIndexFieldName('PK1', 'SK')).toEqual('SK1');
    expect(parseIndexFieldName('PK1', 'PK')).toEqual('PK1');
    expect(parseIndexFieldName('PK1A', 'PK')).toEqual('PK1APK');
    expect(parseIndexFieldName('000PK0xx', 'PK')).toEqual('000PK0xxPK');
    expect(parseIndexFieldName('PK', 'PK')).toEqual('PK');
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

    expect(oneField).toMatchObject({
      error: null,
      firstIndex: {
        PK: ['.age', '.name'],
        PKPart: 'foo⋮_id⋮5∙NAME⋮',
        PKPartOpen: 'foo⋮_id⋮5∙NAME',
        SK: ['#nice', '.age'],
        SKPart: 'nice∙5',
        cursor: 'foo⋮_id⋮5∙NAME⋮nice∙5⋮',
        entity: 'foo',
        key: '_id',
        name: '_id',
        parentPrefix: null,
        relatedTo: null,
        value: 'foo⋮_id⋮5∙NAME⋮nice∙5⋮',
      },
      indexFields: {
        _c: '~!Zm9v4ouuX2lk4ouuNeKImU5BTUXii65uaWNl4oiZNeKLrg==',
        _e: 'foo',
        _id: 'foo⋮_id⋮5∙NAME⋮nice∙5⋮',
        _idPK: 'foo⋮_id⋮5∙NAME⋮',
        _idSK: 'nice∙5',
      },
      invalidFields: null,
      parsedIndexKeys: [
        {
          PK: {
            definition: ['.age', '.name'],
            destinationField: {
              key: '_idPK',
              value: 'foo⋮_id⋮5∙NAME⋮',
            },
            parsed: {
              PK_SK: 'PK',
              foundParts: ['5', 'NAME'],
              indexField: '_id',
              invalidFields: [],
              isFilter: false,
              requiredFields: ['age', 'name'],
              valid: true,
            },
            requiredFields: ['age', 'name'],
          },
          SK: {
            definition: ['#nice', '.age'],
            destinationField: {
              key: '_idSK',
              value: 'nice∙5',
            },
            parsed: {
              PK_SK: 'SK',
              foundParts: ['nice', '5'],
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
            PK: ['.age', '.name'],
            SK: ['#nice', '.age'],
            name: '_id',
          },
          indexFieldsParsed: {
            PKField: '_idPK',
            SKField: '_idSK',
            documentFields: {
              _c: '~!Zm9v4ouuX2lk4ouuNeKImU5BTUXii65uaWNl4oiZNeKLrg==',
              _e: 'foo',
              _id: 'foo⋮_id⋮5∙NAME⋮nice∙5⋮',
              _idPK: 'foo⋮_id⋮5∙NAME⋮',
              _idSK: 'nice∙5',
            },
          },
        },
      ],
      valid: true,
    });
  });

  it('should mount PK + SK when index name is "PK"', async () => {
    const oneField = getDocumentIndexFields(
      { name: 'NAME', age: 0 },
      {
        entity: 'foo',
        indexes: [
          {
            name: 'PK',
            PK: ['.age', '.name'],
            SK: ['#nice', '.age'],
          },
        ],
      }
    );

    expect(oneField).toMatchObject({
      error: null,
      firstIndex: {
        PK: ['.age', '.name'],
        PKPart: 'foo⋮PK⋮5∙NAME⋮',
        PKPartOpen: 'foo⋮PK⋮5∙NAME',
        SK: ['#nice', '.age'],
        SKPart: 'nice∙5',
        cursor: 'foo⋮PK⋮5∙NAME⋮nice∙5⋮',
        entity: 'foo',
        key: 'PK',
        name: 'PK',
        parentPrefix: null,
        relatedTo: null,
        value: 'foo⋮PK⋮5∙NAME⋮nice∙5⋮',
      },
      indexFields: {
        PK: 'foo⋮PK⋮5∙NAME⋮',
        SK: 'nice∙5',
        _c: '~!Zm9v4ouuUEvii6414oiZTkFNReKLrm5pY2XiiJk14ouu',
        _e: 'foo',
        _id: 'foo⋮PK⋮5∙NAME⋮nice∙5⋮',
      },
      invalidFields: null,
      parsedIndexKeys: [
        {
          PK: {
            definition: ['.age', '.name'],
            destinationField: {
              key: 'PK',
              value: 'foo⋮PK⋮5∙NAME⋮',
            },
            parsed: {
              PK_SK: 'PK',
              foundParts: ['5', 'NAME'],
              indexField: 'PK',
              invalidFields: [],
              isFilter: false,
              requiredFields: ['age', 'name'],
              valid: true,
            },
            requiredFields: ['age', 'name'],
          },
          SK: {
            definition: ['#nice', '.age'],
            destinationField: {
              key: 'SK',
              value: 'nice∙5',
            },
            parsed: {
              PK_SK: 'SK',
              foundParts: ['nice', '5'],
              indexField: 'PK',
              invalidFields: [],
              isFilter: false,
              requiredFields: ['age'],
              valid: true,
            },
            requiredFields: ['age'],
          },
          entity: 'foo',
          index: {
            PK: ['.age', '.name'],
            SK: ['#nice', '.age'],
            name: 'PK',
          },
          indexFieldsParsed: {
            PKField: 'PK',
            SKField: 'SK',
            documentFields: {
              PK: 'foo⋮PK⋮5∙NAME⋮',
              SK: 'nice∙5',
              _c: '~!Zm9v4ouuUEvii6414oiZTkFNReKLrm5pY2XiiJk14ouu',
              _e: 'foo',
              _id: 'foo⋮PK⋮5∙NAME⋮nice∙5⋮',
            },
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

    expect(oneField).toMatchObject({
      error: expect.any(Object),
      firstIndex: undefined,
      indexFields: null,
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

      expect(oneField).toMatchObject({
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
