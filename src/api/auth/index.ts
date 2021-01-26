import gravatar from 'node-gravatar';
const users = [
    {
        email: 'faladh.mail@gmail.com',
        password: 'fred',
        name: 'Frederico Renan',
        image: gravatar.get(`faladh.mail@gmail.com`),
        status: 'active',
    },
    {
        email: 'mia@gmail.com',
        password: 'mia',
        name: 'Mayuri Miyatake',
        image:
            'data:image/jpeg;base64,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',
        status: 'active',
    },
    {
        email: 'fgauz@gmail.com',
        password: 'frederico',
        name: 'Frederico Gauz',
        image:
            'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxALChAQEBAJEBAJCAoICAkJDQ8ICQcWIB0iIiAdHx8kKDQsJCYxJx8fLTotMT0uMDdDIyszQDMtNzQtLisBCgoKDg0OGhAQGi0lHyUtLS0tLS0tKystLS0tKy0rLS0tLSstLSstKy0rLS0tLS0tLS04LSstLS0yLS0rNy03N//AABEIAMgAyAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAAEDBAYHAgj/xAA8EAABAwIEBAQCBwcEAwAAAAABAAIRAwQFEiExBkFRYRMicYEHkRQyQlKhscEVI2Jy0eHwJFOCkjNDov/EABoBAAMBAQEBAAAAAAAAAAAAAAACAwEEBQb/xAAlEQACAgICAgIBBQAAAAAAAAAAAQIRAyESMQRBEyIyQlFSYZH/2gAMAwEAAhEDEQA/AOr4fTqEDKWBhL88iag9EWZSA6k9TqUOtLltNoac0vqFrAAXByIscTyj13UMdAuiRJME6uAkkkkAJeXPA/yVDeXLKFMveYa2JOpQStxI1urGOeAJe5kuazsUkpUalZZxt5c1ukQTBdpmWVxIw8HQkiIGpV684jp3WVuUtyPJOsoJcXY8R07gkNHMrnk7NcL7LtFj3NBLiB0boEjS/jrbzvKFNxbkToDAjcqT9qzsBGxzblKL8YTY4zBM+uhUkz8kLpYi17oLfX7KstrAuEEx31LUWZLDaLRSXpgzD8+6YiEydnNKLXYySQTgLRBBOknCDBJ0gE6AFCdJOEAJOkkgDT4dGUz96R2V3OOoQu0thVkkuGR7SMpLQUUYwDaE+O6O2PR6BTpswSlWs0dRV6zaTC5xADAS5zjAC9OMDXQAST0XNfiBxUylDJOhzimdz0n1SynQ0Y2WMd4kZVeS/MKVMnwWbNd3KzF1xUSSKbg2m90hlKAxvsueYxxHVuXmS4NnRn2QqNtePnQnXccipcX2yujfvv3BxcTIcCS4c1Qr4w+NJM//AChtg57hBmN43CK07cEbbDXupOkVWNsrjEKgAAGupPRqiqYw9vOIMHmFe8CDt2Q+7sM06HUz3QpI34We7fiKHauI1HSCtbYYiKrWkEaiC4GQFzS6snMcZBV7A740HZXTlfsTs1O4prQjTXZ1Ozvy10OMaR2CKU6of0ncdSsLZXgrNLM3nYM1P+MItYXxgSfqaHq1TJzxqSNMdElToXYcNd+RVthkA9dkyZwZMbiz0nSSTEhwnTJwgB0gkE6AHhJJJABu1fUkimKe7c+eQQOyKMpk7uPoNAhdlctpZi4wIGsEoi24LvqtdqJBPlC2Fezth0TtaB/mq9EqIBx3IHonqQxpJOjQSSdgrJ60MZfj7iJthaZQRnrktj7rRv8AoPdfPHEmLPuKznOcSXOJJ5rUfEriEXuJ1Mv1KcUKYmZA5rBZDcVso66qa+ztlUvSGs7d9dwABMnXotfg3D8CXDWNQreBYSKTBprAnqtTbWkD226qOTK3pHdiwqO2D6GFtAGg/VW2WYaiDaXQeiWQ/wBVCmX0D3246KF1uOg7Ik9iic2EGgW6smuGo5INWwwcuvrC1dSnKpXFKOW4hNFtE5pMyL67reuCD/43AtK0lviDarQ9umYRUa37JQLF7cZyPvCQeiH4ZfmhVLHHQjKeSvVo4pKmb2jihpxJ00B5laDBcUFbyyNzkO0rnLLvzlp56tO4ci2F3v0eoHgyZksOgS1RHJHkqOkhJQ2ty2tTD2nR4BHIhTBOjzXp0OE4SThBg4TpoXoIAZJOUkAGMMAdUIIBBZqDqCixqNbuQOyA2lHxXFpLhmpuhzCWuajVG3a0DSYAEnUlZFnbj/Ek+kA7Bx9BAWO+JeOPtLDIPKbkuYXTq0DdbOQOg/BcZ+OV+XV6NJp0ZQc4hpkOJVG2/ZRdnJr+5L6j3dXOM8yjHB+HGq/MRznVZyoDt1IA7ro/DlIUbZhA1cJJS5HxidOGNysNUqQpR6fJFaBBaPTVBvFkqxSrkBclnbQXDwAq9WuBt7qg6uSo5JPNMakW33AVWpc6pnUyd/7qI0JO3dYMSCuP06p6jwRqovBI+STqRhYJJAbGLQk5mjQDKeyyON2+V87aanquiVqcUz3aQecrK4tbeJSJ5tLgeqrCdMhkjaM7RvXhgEmWaA81etL4ueMxO4JPRCKbcryFNTdDh6x6LpaTOOzsfBF54lAtJnLDhzlagLmPAN74dw0HZ5yO6CV04KaVHD5EalY6dMnQQPQSCYJwgB0kkkAXrN7hU8kF2R2UO+qUYpsqOAzOgkAlrNA1BLOqGVQToBM84Ralfh7QWB7gZgxka5KjuxfiWm27ecn+bVca+LlBn7WbBn/SNc9ukU91181KhGzGiJkkuIXBviHiHiYhWdMjNkDuRhOiqRiLoB1w2OTgTyC32H1R4LR0aAO653TqTXn+JbfCH5mN9BokzLSOvx/YYpsJKv0Lfr1lRUKECT6qR12Gc+y50jrsuNpCNgvLwP6qlVxNrNyNRIHMqpXxLPoOZACY1BVzQmgAfmhd1e5SNdAAEOv8aDG7oqzXoPurNnkrNDK4bCZ91ze44kcHaTvr3U9hxY9rt+xBTrGyEssXo3d7bS0kchMLLYgzKHCNCJjoiljxCLhpa6AYGuxUd/RDmkjmEjVMxb0c8uqcVD0J07KuND/mqJ4rSyVD7kIW0yPcj0XbF2jjyKpB/h+/8Kq2DrIIXY8Fv/pVu15EEiHN5BcAYchkH+oXSeAMZc45NSIkgnZJJHNkhyR0ZOvLTIn3C9JThHTgryE6APSSZJAE9mf37J++B1WgDmsH2QOQ0aAsxRGao0dXtBjQo/bWbKbY1dqSXVDncViOzF0K/vGii+DOWm53lBPJfNXF1yDd1RsG1HDrqvpypSBYRAgtIK+YOPrfwMWuqY2p3bgOhTx7L2Zy3fDx6rfcPmQ30ErnjDDvdb3BHhtEGQPKDJ2CMy0jp8d9h7GMWbRblBGmhPMrF4njb58rjvO+ynvqtF7/ADPuHlxgNpNFNvzP9FBVFnQEupvcSJDX1DUcFOMEh5TbB37TqVHS57pAga7IvY4iTlAMnM0CdyhTruk8nJQpDToSR+KltGDxGOEt/etkiS0J5RTQQk0zbXllUrUZAgxMzosfeNqGp4ZgFu5eQxrF0eg81LcFhA0EFwn8Fg+J7So67cCGyGtccvlbUCji7LZW+IMFK3YfM6rWdzFL/T0R7nUp33NNulNtmw8vKa7/AJleaFnm3OmoIG6Qwds/WqHsGhq6LRy8WJmI1A6C8gcjThoK0OE4q4jKS9wEEgmc6EfsUObIhoj7RiVPhlm5rtA4gGOcJJOLHimGcQq0qdlUAt81auXNF3Xdn+jt/hHVYd1Mg6bSukXdqK9IiHTEg6NaFiry2yVXD7pIRin6EzQ9lGk3XrtIK03B73U7sFgkS0vZMEDqg7mNDJ5xAjQOWh+Fgz4pUk/+O0cWtOs6hPLaOaf1jZ1un9UegXtMP0TpDzWOnTJwgwcpJApINPNN0PEb5mkdloKLargczmNOZwApiZCzYdDgehBWgo3oeSGtqEtMO8uQBYjrwlg2wI1dUPXUgL5w+KFDw8duxtmuBUHOZAX0aKlQ7MaP5nLi/wAaMDqNuRdwMtRraFdzJhruSeL2WOWWjKb6wFRzmN1zPY3O4ey3FGgwUQ2k5z2Otmhj6jRSc/XWFh6NKXD+IwFvbMB9Gm07NptZ6Lcp0YOwO/DnF2og7NGyeph7A3zAHWTJIJWiNmGajU7CSXKlXtqlQwPCAmNi5yipnX8YBFMNMNY0CYMDUq06g4UgQHSXMDGgakyjFrgwbBd5jM+bQBXaTYrsaG5iA55gS2mslkNWMLYMIBaeQn0QziLCnV67XsIa+mWkF2oKNWDZM89ipLynIHXMWE9FNNjzVqjEXGB1Kri4Ehx+udWteVTq4PcsOoc4DSWOBWoxO2fb0i5pkBxeBMOahVtxI2YcDvBO8qilKhFGJBZ2lQAS1o6mqS4o22l4dPMWyIl5ZJA9lNbYnQqDbXnOquurMe2GxtEdUj2O0VGsDgCI1EtLdis7ieHkvqOAJy+YjcuRuxBp1X0uTT4lD0Kt3zQGhw3kA90QlRDJG2c81daVahHlpOAH6Ir8KXEYs3fz0azXc+SnvcNNPB7lsQXON1pq0gGUT+FGGZi642FMeC0feXSno4vL0qOnBOmCdKeUPCSSUoAdJeXFJBpNWeyqIa1ocDLcumbsjlJ4DQSWiWtJ2aufWmId9YBC1OEXNGo0vMZ6haH5tRIXRlx+0dONpBo3LPvD28yE8T2FLEbF9F7XuDxmBAILT1RhjQNgPkvT4IgwNI5BQOhM+Tru1da3WR4INOo5uuzoMLSYRXJpEfxENK1HxnwBlG3pV6YbIvKxuC36xza/mFnrdkU6ZALRVptqtHMStm7R0YOy5QJc+CfqtCtfSGU95MbwN1VpUpeSOmqrYhXygtG4HmdyYuY9CPQ9/jhnLTbrtJ1cFYwi+bQouNQ+ao+XE7oTh9tmdnPU5Z5ojdWYrMykaRryWugLzOJaeVxYW6AidyEKr8TENJ1JAJHV6H1sKFIGARpHVC/BObXUT7J1FEpZH0EW41cXJIdo07ay0Kq+0gfiUQsaIHy9lJd5Q3km0ujF/YMt65YYPoOhRO3xMscJJ3A6IRWIJPrspqcvt3NgSwFzHfaCySGUjZU3itke0+Zh/wC3UK7eNLgAI8xa4TsVl+HLswATzBHZEOLL40LWjUB2u2tMb7EqSi7oWTrZdxar4eG3DXbfRajR2J2Rv4e0W08Mbl+25z3eqwtDEjiNWnSIOSo4OqRu+F1DArAWluKYMgatPVVimkeZ5s09IJJJJJjzhwkUydADH9UkxMfLVJA1HPLW7jnyR/BLuXwTs4OWMpVIRbCLghx15L0GVOu2bhWZOZ/doMAK0LdnMT0kkrJ8P4jBAnfQ9FqW+IRp4Y5jdy45xpl4Ssq47g1K/s6lF7GEVWOAMasPVcivsMdSe+mSB9AihPWNF2nwqh3e0fytWJ+IPDTn0X3NGo7xSGtqUsvkuTy91KSOrDNRezBl+Wm4jcgAIZdaEM6AVqzubuysmrNITv5S4dCqV9JY9w3ytPcqS7PRT0XLau3ttICtC9YzctHPVYOpdVp8gcQDLsskqzhTDcuIqEjKQIcSHOVXj1bI/Ls09xitKCBrI17ILWumz5Gk6z1WkwywtmVB4jqAH0Ygmo4NBK9vvsNtyRm8Q5if9Ow1B80l/sgczKsuqz3BrGxnJDSRoqt9Xrta4mIYSCj9fGLclgpUrgllRxEMDYCqXdB1yDmb4TC4uLSZq1PXoni3e0I7fRnLSs9zpOx3K0lgz91PUOCrOtWtEAAACArtLyW4/wCRRN2Pji49njB/KR/NBU/G9SbGi3mbtzvw/uo7AZY9ST2VPjF5Lbcci2tUHzCyC+4md/Ufg53h4hbHk6uKZ99F3GmIaOwgdlxrgCydc3tHTS3f9Ie7k2F2YJ32ePnez0Ek0pLDnHTpkkAeamyS9O1SQaciar+GmKg9CFRaFbtDDx/MF6Bc0+H1y1w/yFvsKvw+iJzEgAHKMxXNqDtfdazhi8y1QDs4ZSp5I2jYOmasXM7Mqn/jCasXVGwaTiN4cQAVOHjqPmEvFb95vzC5DoRxfjXCTh9+fLkp3gdWoxq1pnUf51WbmQWnoQu8Y7htviFEsq5CIdlM+ameoXF8fwp1jcupkzkOajUiBXapyR3YMlqmAcIoZar27EOMd0SqWwJ1a069BqoaAmoHjQ7EdUSjN6rHJnTFENHD6Jb5qbDrInkvNejRZoKdMdDqSpKpMRCpVaZ7rbGpHlsA6aa6AaL24T/m6hNNx2BHsp6Nu7nP6IbMasrVGTp31SuX/VYOwPZEXUMo9BmPZDWU5eXnlICy7ELNCnIgdACq3FtqSLcgeU0qjSfuwVbtH6+p0Wrt7anWos8RgeKZdUDftAwhT4uyOSPJFn4d4YLbD80Q+vULnvIhzhyWrWVZxfbUWNaKdcCIEAQ1XLfi60qOjM9msfvG5Qqnlz8TNd8Q+nCH/ti2/wB6h1+sCVDV4itWb1QdfshzgsJLxsr/AEv/AALykg9LiW0eY8UD+cFgVynilB21Wj/2DUA/GyruLLiSpuxWgN6tLro7Mkgz4Mv8Wcwap6J1HqJUQUjNF6A4dpORbDK2V49QUDoPloPVoPor1pVhw/FYYdNs206lJrsoJcPNPMq02mwbMZ8kFwCq6pRgFoy6+YTKKilU/wBxns1cklTLwdosgAfZZ8gsv8QMCF9YGoxo8ayDq9HKPNVH2m/L8lohRf8A7vyaE/0cn/2v76AJGrKxbTtHzuKQcQ5vWSOTkWoxA9PcL3xvhDsKxR4bPhXE3NsToCDuPY/og7b/AFke46KLR6MciasPMptO4XiqGN5A9EKGJAjUx0UFbEd9QsSZRSQUfWbPIfLReDdM7fms/XvRG6pOviNv7puDMlNBu8vpBA56KhUr+UNHPdD3XJPqdlLb6meewTcSTlYUtD/RbHA64FNxdAABgnbZY2iYgDfQAcyrmIYh4NJtIHV4BdHIJGrY0VbILkaejgQoDchtTKQIIkHovbn5gNe5Q+9H7wemqukd7dIJ0q4aSVBcYgfxVYO09lBUK2jHItm4OWZM7hS0r0RJLp2I5FD58vso2uMIoXkFTel2xIHLfVOhbKkJIobmadu/5r2oqblM7Rvsu2z5Yt2r5aPkO6N2VAAZnHQanusvb4gyjJcfqmYUN9jtSu2GS1kaxo947LG0uxo4pT/FHSsKxhorNp09dW5iNQ1bJtzI0bVPoAQuHYHxEKRDKVNxdIDn1Jze66XhPFFC2tJua9MPnNkbL3D2UcqT2NiUrqg/e4zStWg1j4YOjfEhpehNXj2xYD56pjbKwnMuN8YcSuxHEqtZrnmm2oaVo0yAxg0Gnff3QyhiBIgmeZnWVGj08fixa+zNTxjxDUxWs4mBRoVHusWFobUYD1Psss8TqN+fdWm1Q8QSJygjuVHVpn8IKnLseUFHUSpVOYdD2VSox3r+qvmlOyq13Fm4Py0QmJRULCvBEL3UrkqDUqlCkgP5q7RqZRJ6QOyos+eq9m6FLu6NB9lqGrBOgwy6FuzxH/WgikzmhguHVahe46kyOgVB9Z1V0uM9OjVYpmB7aojCisJWwh45Hz1SuXyR6yVTDo+alnmfZadKl6J3P/ovLlGwypEDXY529l5aPyXt50UQcgD1CS8OKSDLNC16sGp5D2BKZJdZ84YvGLwvrwCYbv3RLDb4OaGP2gAHmxJJRns9Hw3xei7ldQlzTUI+sHNgwqN5iL3iJImQR9XMnSUz0ZRSWiix8b9VK0/nKSSCaPL6pzSDtor9pirT5anpnGpCSSxxTEkE6NFlTWm9jugB3UNwyAQ4RpGqdJQapi2BrpjWz8xCHurgfoAkkrw2iM3TIX13HbQco0K8sZJ/NJJUoRbJ6Ynb3VloASSWM6oLR7piTJ9knvkwkklK9EtPZe5TJLCi6PTv7KMp0kAeHFJJJAh//9k=',
        status: 'active',
    },
    {
        email: 'test@gmail.com',
        password: 'test',
        name: 'Usuario Teste',
        image: gravatar.get(`fred.r.gauz@gmail.com`),
        status: 'active',
    },
];

export interface ISignInData {
    email: string;
    password: string;
}

export const getUsers = () => {
    return users;
};
// export const getUserFromLocalStorage = () => {
//     if (typeof window === undefined) return false;
//     return typeof window && window.localStorage.getItem('user');
// };
export const signOut = () => {
    if (typeof window === undefined) return false;
    return typeof window && window.localStorage.removeItem('user');
};
const getUserFromMockDb = (data: ISignInData) => {
    const user = users.find(
        (u) => u.email === data.email && u.password === data.password
    );
    if (user) return { email: user.email };
    return undefined;
};
export const mockSignIn = async ({ email, password }: ISignInData) => {
    const user = getUserFromMockDb({ email, password });
    if (user) {
        window.localStorage.setItem('user', JSON.stringify(user));
        return { ok: true, errors: undefined };
    }
    return { ok: false, errors: { message: 'Wrong login or password.' } };
};
// export const mockIsSignedIn = () => {
//     if (getUserFromLocalStorage()) return true;
// };
