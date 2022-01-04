/*
UAS_Cafe (Makanan dan Minuman)
Kelompok:
Ade Indah Riznaya 194110039
Rika Sheva Aprilia 19411017
*/
const Model = require("../Model/model_cafe");
const response = require("../Config/response");

exports.get = (data) =>
  new Promise((resolve, reject) => {
    Model.find().then((data) => {
      if (data.length == 0) {
        reject(response.errorResult());
      } else {
        resolve(
          Object.assign(response.suksesResult("Success"), {
            data: data,
          })
        );
      }
    });
  });

//cara menambahkan data dari model ke bawah ini
exports.add = (data) =>
  new Promise((resolve, reject) => {
    Model.create(data)
      .then(() =>
        resolve(response.suksesResponse("Berhasil Menambah Data Makanan/Minuman"))
      )
      .catch(() =>
        reject(response.errorResponse("Gagal Menambah Data Makanan/Minuman"))
      );
  });

  // Delete data
exports.delete = async (req, res) => {
  try {
    await Model.findOneAndDelete({ _id: req.params.id });
    res.json(response.suksesResponse("Berhasil Menghapus Data"));
  } catch (error) {
    res.json(response.errorResponse("Gagal Menghapus Data"));
  }
};

// update data
exports.update = async (req, res) => {
  try {
    await Model.findOneAndUpdate(
      { _id: req.params.id },
      {
        namaMenu: req.body.namaMenu,
        jenis: req.body.jenis,
        deskripsi: req.body.deskripsi,
        status_stok: req.body.vga,
        harga: req.body.harga
      }
    );
    res.json(response.suksesResponse("Berhasil Update Data"));
  } catch (error) {
    res.json(response.errorResponse("Gagal Update Data"));
  }
};